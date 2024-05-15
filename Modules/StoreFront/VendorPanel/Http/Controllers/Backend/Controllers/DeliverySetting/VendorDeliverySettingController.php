<?php

namespace Modules\StoreFront\VendorPanel\Http\Controllers\Backend\Controllers\DeliverySetting;

use stdClass;
use App\Config\ps_constant;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Modules\Core\Constants\Constants;
use Modules\StoreFront\VendorPanel\Http\Requests\StoreDeliverySettingRequest;
use Modules\StoreFront\VendorPanel\Http\Services\VendorDeliverySettingService;

class VendorDeliverySettingController extends Controller
{
    protected $vendorDeliverySettingService;

    public function __construct(VendorDeliverySettingService $vendorDeliverySettingService)
    {
        $this->vendorDeliverySettingService = $vendorDeliverySettingService;
    }

    public function index(Request $request)
    {
        return $this->vendorDeliverySettingService->index($request);
    }

    public function store(StoreDeliverySettingRequest $request)
    {
        return $this->vendorDeliverySettingService->store($request);
    }

    public function update(StoreDeliverySettingRequest $request, $id)
    {
        return $this->vendorDeliverySettingService->update($request, $id);
    }
}
