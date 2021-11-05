<template>
  <div>
<div class="hero__collections">
    <div class="container">
        <h1>Artwork collections</h1>
    </div>
</div>
<div class="filters bg_white border-b py-20">
    <div class="container">
        <div class="row justify-content-between align-items-center">
            <div class="col-lg-auto">
                <div class="d-flex space-x-10 align-items-center">
                    <span class="color_text txt_sm"> FILTER BY: </span>
                    <ul class="menu_categories space-x-20">
                        <li class="d-flex space-x-10 switch_item">
                    
                            <input type="checkbox" id="switch1" /><label
                                for="switch1">Toggle</label>
                            <span> Has list price </span>
                        </li>
                        <li class="d-flex space-x-10 switch_item">
                    
                            <input type="checkbox" id="switch2" checked/><label
                                for="switch2">Toggle</label>
                            <span> Has open offer </span>
                        </li>
                        <li class="d-flex space-x-10 switch_item">
                    
                            <input type="checkbox" id="switch3" /><label
                                for="switch3">Toggle</label>
                            <span> Owned by creator </span>
                        </li>
                        <li class="d-flex space-x-10 switch_item">
                    
                            <input type="checkbox" id="switch4" /><label
                                for="switch4">Toggle</label>
                            <span> Has sold </span>
                        </li>
                    </ul>                </div>
            </div>
            <div class="col-lg-auto">
                <div class="d-flex space-x-10 align-items-center sm:mt-20">
                    <span class="color_text txt_sm"> SORT BY: </span>
                    <div class="dropdown">
                        <button class="btn btn-dark btn-sm dropdown-toggle"
                            type="button"
                            data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            Recent Active
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else
                                here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><div class="seaction mt-100">
    <div class="container">
        <div class="row justify-content-center mb-30_reset">
            <div class="col-lg-4 col-md-6 col-sm-8" v-for="n in 6" :key="n">
                <collection-card></collection-card>
            </div>  
        </div> 
      </div>
</div>
  </div>
</template>

<script>

import CollectionCard from "../components/collection-card";
export default {
    components: {CollectionCard}
}
</script>
