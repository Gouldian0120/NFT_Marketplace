<template>
  <div>
<div class="hero__activity">
    <div class="container">
        <h1 class="text-center">Activity Feed</h1>
    </div>
</div>
<div class="bg_white border-b py-20">
    <div class="container">
        <div class="d-flex justify-content-center">
            <ul class="menu_activity space-x-20">
                <li> <a href="#">
                        <i class="ri-gamepad-line"></i> <span> Games </span>
                    </a>
                </li>
                <li> <a href="#">
                        <i class="ri-brush-line"></i> <span> Art </span>
                    </a>
                </li>
                <li> <a href="#">
                        <i class="ri-stock-line"></i> <span> Trading Cards </span>
                    </a>
                </li>
                <li> <a href="#">
                        <i class="ri-music-line"></i> <span> Music </span>
                    </a>
                </li>
                <li> <a href="#">
                        <i class="ri-global-line"></i> <span> Domain Names </span>
                    </a>
                </li>
                <li> <a href="#">
                        <i class="ri-emotion-laugh-line"></i> <span> Memes </span>
                    </a>
                </li>
                <li> <a href="#">
                        <i class="ri-layout-4-line"></i> <span> Collectibles </span>
                    </a>
                </li>
            </ul>        </div>
    </div>
</div><div class="section__activity">
    <div class="container mt-100">
        <div class="row justify-content-center">
            <div class="col-lg-6 col-md-8 col-sm-10">
                <div class="d-flex justify-content-between align-items-center
                    mb-20">
                    <a href="#">Mark all read</a>
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
                <div class="space-y-20">
                    <div class="box" v-for="n in 4" :key="n">
                        <activity-card></activity-card>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
  </div>
</template>

<script>

import ActivityCard from "../components/activity-card";
export default {
    components: {ActivityCard}
}
</script>
