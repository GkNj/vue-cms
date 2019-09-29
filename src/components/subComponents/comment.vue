<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容（最多不超过120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="addComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in commentList">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time |dateFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
    import axios from 'axios'
    import {Toast} from 'mint-ui'

    export default {
        name: "comment",
        data() {
            return {
                commentList: [],
                msg: '',
                comment: []
            }
        },
        props: [
            "id"
        ],
        methods: {
            getComment() {
                axios.get('http://localhost:3000/newsList/' + this.id).then(response => {
                    this.commentList = response.data.comment
                    // console.log(this.commentList);
                })
            },
            addComment(e) {
                let cmt = {
                    "user_name": "匿名用户",
                    "add_time": Date.now(),
                    "content": this.msg
                }
                if (this.msg.trim() === '') {
                    return Toast('评论不能为空')
                } else {
                    console.log(cmt)
                    this.commentList.unshift(cmt)
                    this.msg = ''
                }
            }
        },
        created() {
            this.getComment()
        }
    }
</script>

<style lang="scss" scoped>
    .cmt-container {
        h3 {
            font-size: 18px;
        }

        textarea {
            font-size: 14px;
            height: 85px;
            margin: 0;
        }

        .cmt-list {
            margin: 5px 0;

            .cmt-item {
                font-size: 13px;

                .cmt-title {
                    line-height: 30px;
                    background-color: #ccc;
                }

                .cmt-body {
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>
