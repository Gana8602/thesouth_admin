<?php

namespace Modules\Core\Http\Controllers\Backend\Controllers\DownloadDB;

use App\Config\ps_constant;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
use Modules\Core\Constants\Constants;
use Modules\Core\Http\Services\DownloadDBService;

class DownloadDBController extends Controller
{
    const parentPath = "download_db/";
    const indexPath = self::parentPath . "Index";
    const indexRoute = "download_db.index";

    protected $downloadDBService;

    public function __construct(DownloadDBService $downloadDBService)
    {
        $this->downloadDBService = $downloadDBService;
    }

    public function index()
    {
        if (!permissionControl(Constants::downloadDbModule, ps_constant::readPermission)){
            return redirect()->route('admin.index');
        }
        $dataArr = $this->downloadDBService->index();
        return renderView(self::indexPath, $dataArr);
    }

    public function downloadDB()
    {
        if (!permissionControl(Constants::downloadDbModule, ps_constant::deletePermission)){
            return redirect()->route('admin.index');
        }
        Artisan::call("backup:run --only-db -q");
        $files = File::files(public_path(env("APP_NAME")));

        if (!empty($files)) {
            // Sort the files by last modified time in descending order
            usort($files, function($a, $b) {
                return filemtime($b) - filemtime($a);
            });

            // Get the latest file
            $latestFile = $files[0]->getPathname();
            return response()->download($latestFile)->deleteFileAfterSend(true);
        }

    }
}
