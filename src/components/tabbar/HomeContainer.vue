<template>
    <div>

        <!--        轮播图-->
        <mt-swipe :auto="4000">
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newsList">
                    <img src="../../assets/images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photoList">
                    <img src="../../assets/images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodsList">
                    <img src="../../assets/images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assets/images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assets/images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assets/images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div>
            </a></li>
        </ul>
    </div>
</template>

<script>


    export default {
        name: "HomeContaine",
        data() {
            return {}
        },
        methods: {
            //获取轮播图
            // getLunboTu() {
            //     this.$http.jsonp('http://vue.studyit.io/api/getLunbo', {credentials: true}).then(result => {
            //         console.log(result.body)
            //     })
            // }
        },
        created() {
            // this.getLunboTu()
        }
    }
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;
    }

    //第一种
    /*.mint-swipe-item:nth-child(1) {*/
    /*    background-color: #42b983;*/
    /*}*/

    /*.mint-swipe-item:nth-child(2) {*/
    /*    background-color: red;*/
    /*}*/

    /*.mint-swipe-item:nth-child(3) {*/
    /*    background-color: bisque;*/
    /*}*/

    .mint-swipe-item {
        &:nth-child(1) {
            background-color: #42b983;
            background-image: url("http://nwfs.deppon.com/weaver/weaver.file.FileDownloadForDoc?fileid=1696146&download=1&votingId=0");
            width: 100%;
            height: 100%;
        }

        &:nth-child(2) {
            background-color: #2ac845;
            background-image: url("http://nwfs.deppon.com/weaver/weaver.file.FileDownloadForDoc?fileid=1708788&download=1&votingId=0");
            width: 100%;
            height: 100%;

        }

        &:nth-child(3) {
            background-color: #6641e2;
            background-image: url("http://nwfs.deppon.com/weaver/weaver.file.FileDownloadForDoc?fileid=1720617&download=1&votingId=0");
            width: 100%;
            height: 100%;
        }
    }

    .mui-grid-view.mui-grid-9 {
        background-color: white;
        border: none;

        img {
            width: 60px;
        }

        //文字大小
        .mui-media-body {
            font-size: 13px;
        }
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0;
    }
</style>
