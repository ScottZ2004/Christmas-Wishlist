<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreWishlistRequest;
use App\Http\Resources\V1\WishListResponse;
use Illuminate\Http\Request;
use App\Models\Wishlist;
use Exception;

class WishListController extends Controller
{
    public function index() {
        return WishListResponse::collection(Wishlist::all());
    }

    public function show(Wishlist $wishList){
        return new WishListResponse($wishList);
    }

    public function store(StoreWishlistRequest $request){
        Wishlist::create($request->validated());
        return response()->json("Wishlist Created");
    }

    public function update(StoreWishlistRequest $request, Wishlist $wishList){
        try{
            
            $wishlist = Wishlist::find($wishList->id);
            $wishlist->name = $request->input('name');
            $wishlist->done = $request->input('done');
            $wishlist->save();
        }
        catch(Exception $e){
            return response()->json("meh");
        }
        return response()->json("WishList geupdate");
    }

    public function destroy(Wishlist $wishList){
        $wishList->delete();
        return response()->json($wishList);
    }
}
