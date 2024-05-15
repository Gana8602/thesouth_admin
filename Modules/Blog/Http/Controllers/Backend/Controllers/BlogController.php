<?php

namespace Modules\Blog\Http\Controllers\Backend\Controllers;

use App\Config\ps_config;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Blog\Entities\Blog;
use Modules\Blog\Http\Services\BlogService;
use Modules\Blog\Http\Requests\UpdateBlogRequest;
use Modules\Blog\Http\Requests\StoreBlogRequest;
use Modules\Core\Constants\Constants;
use Modules\Core\Http\Services\CoreFieldFilterSettingService;

class BlogController extends Controller
{

    const parentPath = "blog/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "blog.index";
    const createRoute = "blog.create";
    const editRoute = "blog.edit";

    protected $blogService, $coreFieldFilterSettingService;

    public function __construct(BlogService $blogService, CoreFieldFilterSettingService $coreFieldFilterSettingService)
    {
        $this->blogService = $blogService;
        $this->coreFieldFilterSettingService = $coreFieldFilterSettingService;
    }

    public function index(Request $request)
    {
        // check permission
        $redirectView = $this->blogService->checkPermission(Constants::viewAnyAbility, Blog::class, ps_config::redirectPathForNoPermission);
        if (!empty($redirectView)){
            return $redirectView;
        }
        $dataArr = $this->blogService->index($request);
        return renderView(self::indexPath, $dataArr);
    }

    public function create()
    {
        // check permission start
        $redirectView = $this->blogService->checkPermission(Constants::createAbility,Blog::class, ps_config::redirectPathForNoPermission);
        if (!empty($redirectView)){
            return $redirectView;
        }
        // check permission end

        $dataArr = $this->blogService->create();
        return renderView(self::createPath, $dataArr);
    }

    public function store(StoreBlogRequest $request)
    {
        $dataArr = $this->blogService->store($request);
        if(!empty($dataArr['error'])){
            return redirectView(self::createRoute, $dataArr['error'], Constants::danger);
        }
        return redirectView(self::indexRoute);
    }

    public function edit($id)
    {
        // check permission start
        $blog = $this->blogService->getBlog($id);
        $redirectView = $this->blogService->checkPermission(Constants::editAbility, $blog, ps_config::redirectPathForNoPermission);
        if (!empty($redirectView)){
            return $redirectView;
        }

        $dataArr = $this->blogService->edit($id);
        return renderView(self::editPath, $dataArr);
    }

    public function update(UpdateBlogRequest $request, $id)
    {
        $dataArr = $this->blogService->update($id, $request);
        if(!empty($dataArr['error'])){
            return redirectView(self::editRoute, $dataArr['error'], Constants::danger);
        }
        return redirectView(self::indexRoute);
    }

    public function destroy($id)
    {
        $blog = Blog::find($id);
        // check permission start
        $redirectView = $this->blogService->checkPermission(Constants::deleteAbility, $blog, ps_config::redirectPathForNoPermission);
        if (!empty($redirectView)){
            return $redirectView;
        }
        // check permission end

        $dataArr = $this->blogService->destroy($id);
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }

    public function statusChange($id)
    {
        // check permission start
        $blog = $this->blogService->getBlog($id);
        $redirectView = $this->blogService->checkPermission(Constants::editAbility, $blog, ps_config::redirectPathForNoPermission);
        if (!empty($redirectView)){
            return $redirectView;
        }

        $this->blogService->makePublishOrUnpublish($id);
        return redirectView(self::indexRoute, __('core__be_status_updated'));
    }

    public function screenDisplayUiStore(Request $request)
    {
        makeColumnHideShown($request);
        return redirect()->back();
    }

}
