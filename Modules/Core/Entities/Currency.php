<?php

namespace Modules\Core\Entities;

use App\Models\User;
use App\Policies\PsPolicy;
use Modules\Core\Entities\Item;
use App\Policies\PsVendorPolicy;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Modules\Core\Constants\Constants;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Currency extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'currency_symbol', 'currency_short_form', 'status', 'added_date', 'added_user_id', 'updated_date', 'updated_user_id', 'updated_flag'];

    protected $table = "psx_currencies";

    const CREATED_AT = 'added_date';
    const UPDATED_AT = 'updated_date';

    const tableName = "psx_currencies";
    const id = 'id';
    const isDefault = "is_default";
    const status = "status";
    const currencyShortForm = 'currency_short_form';
    const currencySymbol = 'currency_symbol';
    const addedUserId = 'added_user_id';

    protected static function newFactory()
    {
        // return \Modules\Core\Database\factories\CurrencyFactory::new();
    }

    public function item(){
        return $this->hasMany(Item::class);
    }

    public function owner(){
        return $this->belongsTo(User::class, 'added_user_id');
    }

    public function editor(){
        return $this->belongsTo(User::class, 'updated_user_id');
    }

    // public function authorizations($abilities = []){
    //     return collect(array_flip($abilities))->map(function ($index, $ability){
    //         return Gate::allows($ability, $this);
    //     });
    // }

//    public function toArray()
//    {
//        return parent::toArray() + [
//            'authorizations' => $this->authorizations(['update','delete','create'])
//        ];
//    }

    // protected function authorization(): Attribute
    // {
    //     return Attribute::make(
    //         get: fn ($value) => $this->authorizations(['update','delete','create']),
    //     );
    // }

    public function authorizations($module, $abilities = [], $policyClass = null, $params = [])
    {
        $policy = $policyClass ? new $policyClass($module, $this) : null;

        return collect($abilities)->mapWithKeys(function ($ability) use ($policy, $params) {
            return [$ability => $policy ? $policy->{$ability}(...($params[$ability] ?? [])) : false];
        });
    }

    public function vendorAuthorization(): Attribute
    {
        $params = [
            'update' => [Auth::user(), $this],
            'create' => [Auth::user()],
            'delete' => [Auth::user(), $this],
        ];

        return Attribute::make(
            get: fn ($value) => $this->authorizations(Constants::vendorCurrencyModule, array_keys($params), PsVendorPolicy::class, $params),
        );

    }

    public function authorization(): Attribute
    {
        $params = [
            'update' => [Auth::user(), $this],
            'create' => [Auth::user()],
            'delete' => [Auth::user(), $this],
        ];
        return Attribute::make(
            get: fn ($value) => $this->authorizations(Constants::currencyModule, array_keys($params), PsPolicy::class, $params),
        );
    }


}
