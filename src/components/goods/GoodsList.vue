<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="https://img10.360buyimg.com/mobilecms/s250x250_jfs/t1/58884/24/6311/244007/5d4119e0Efe91bbfb/bdd84ab4b3949992.jpg"
            >
            <h1 class="title">MAXHUB65英寸会议平板 会议平台</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥9999</span>
                    <span class="old">￥11499</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩20件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://img10.360buyimg.com/mobilecms/s250x250_jfs/t1/58884/24/6311/244007/5d4119e0Efe91bbfb/bdd84ab4b3949992.jpg"
            >
            <h1 class="title">MAXHUB65英寸会议平板 会议平台</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥9999</span>
                    <span class="old">￥11499</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩20件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://img10.360buyimg.com/mobilecms/s250x250_jfs/t1/58884/24/6311/244007/5d4119e0Efe91bbfb/bdd84ab4b3949992.jpg"
            >
            <h1 class="title">MAXHUB65英寸会议平板 会议平台</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥9999</span>
                    <span class="old">￥11499</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩20件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://img10.360buyimg.com/mobilecms/s250x250_jfs/t1/58884/24/6311/244007/5d4119e0Efe91bbfb/bdd84ab4b3949992.jpg"
            >
            <h1 class="title">MAXHUB65英寸会议平板 会议平台</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥9999</span>
                    <span class="old">￥11499</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩20件</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsList"
    }
</script>

<style lang="scss" scoped>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
        .goods-item {
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 4px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 293px;
            img {
                width: 100%;
            }
            .title {
                font-size: 14px;
            }

            .info {
                background-color: #eee;
                p {
                    margin: 0;
                    padding: 5px;
                }
                .price {
                    .now {
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .old {
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }
                .sell {
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                }
            }
        }
    }
</style>
