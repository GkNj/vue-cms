<template>
    <div class="newsInfo-container">
<!--        大标题-->
        <h3 class="title">{{newsInfo.title}}</h3>
<!--        小标题-->
        <p class="subTitle">
            <span>发表时间：{{newsInfo.add_time | dateFormat}}</span>
            <span>点击次数：{{newsInfo.click}}次</span>
        </p>
        <hr>
<!--        内容区域-->
        <div class="content">{{newsInfo.content}}</div>
<!--        评论子组件-->
        <comment-box></comment-box>
    </div>
</template>

<script>
    import axios from 'axios'
    import Toast from 'mint-ui'
    import comment from '../subComponents/comment'

    export default {
        name: "NewsInfo",
        data() {
            return {
                newsInfo: []
            }
        },
        components: {
            'comment-box':comment
        },
        methods: {
            getNewsInfo(id) {
                axios.get('http://localhost:3000/newsList/' + id).then(response => {
                    this.newsInfo = response.data
                    // eslint-disable-next-line no-console
                    console.log(response);
                }).catch(err => {
                    // eslint-disable-next-line no-console
                    console.log(err);
                    Toast('请求失败')
                })
            }
        },
        created() {
            this.getNewsInfo(this.$route.params.id)
        }
    }
</script>

<style lang="scss" scoped>
    .newsInfo-container {
        padding: 0 4px;
        .title {
            font-size: 16px;
            margin: 15px 0;
            text-align: center;
            color: red;
        }
        .subTitle {
            font-size: 13px;
            color: #007aff;
            display: flex;
            justify-content: space-between;
        }

    }
</style>
