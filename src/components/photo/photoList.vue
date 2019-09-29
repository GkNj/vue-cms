<template>
    <div>
        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id===0?'mui-active':'']"
                       v-for="item in cates" :key="item.id"
                       @click="getImages(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <!--        图片列表区域-->
        <ul class="photo-list">
            <router-link v-for="(item,i) in list" :key="i" :to="'/heme/photoInfo/'+i" tag="li">
                <img v-lazy="item.url">
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                    <div class="info-body">{{item.content}}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'
    import axios from 'axios'

    export default {
        name: "photoList",
        data() {
            return {
                cates: [],
                list: []
            }
        },
        created() {
            this.getImageCategory()
            this.getImages(0)
        },
        mounted() {
            //初始化滑动控件
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods: {
            getImageCategory() {
                axios.get('  http://localhost:3000/imgCategory').then(result => {
                    let message = {id: 0, title: "全部"}
                    result.data.unshift(message)
                    this.cates = result.data
                })
            },
            getImages(imgId) {
                axios.get('http://localhost:3000/images/' + imgId).then(result => {
                    this.list = result.data.img
                    // console.log(result.data.img);
                    // console.log(this.list + '........');
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    * {
        touch-action: pan-y;
    }

    .photo-list {
        list-style: none;
        margin: 0;
        padding: 10px;
        padding-bottom: 0;

        li {
            background-color: #ccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 9px #999;
            position: relative;

            img {
                width: 100%;
                vertical-align: middle;
            }

            img[lazy="loading"] {
                width: 40px;
                height: 300px;
                margin: auto;
            }

            .info {
                color: white;
                text-align: left;
                position: absolute;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.4);
                max-height: 84px;

                .info-title {
                    font-size: 14px;
                }

                .info-body {
                    font-size: 13px;
                }
            }
        }
    }
</style>
