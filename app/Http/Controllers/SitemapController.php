<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Services\SiteMapService;
use Modules\Blog\Entities\Blog;
use Modules\Core\Entities\Item;
use Modules\Core\Entities\Shop;
use Modules\Core\Entities\Category;
use Modules\Core\Entities\Subcategory;
use Modules\ItemPromotion\Entities\PaidItemHistory;
use Modules\Core\Entities\Vendor;
use Carbon\Carbon;
use Inertia\Inertia;

use Spatie\Sitemap\SitemapIndex;
use Spatie\Sitemap\Tags\Sitemap;
use Spatie\Sitemap\Tags\Url;

class SitemapController extends Controller
{
    protected $siteMapService;
    public function __construct(SiteMapService $siteMapService)
    {
        $this->siteMapService = $siteMapService;
    }

    public function generateSitemap()
    {
        return $this->siteMapService->generateSitemap();
    }

    public function redirectToView()
    {
        return $this->siteMapService->redirectToView();
    }

    public function blogMap()
    {
        return $this->siteMapService->blogMap();
    }

    public function itemMap()
    {
        return $this->siteMapService->itemMap();
    }

    public function categoryMap()
    {
        return $this->siteMapService->categoryMap();
    }

    public function subcatMap()
    {
        return $this->siteMapService->subcatMap();
    }

    public function vendorMap()
    {
        return $this->siteMapService->vendorMap();
    }

}
