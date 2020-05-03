<template>
  <div class="main">
    <el-row :gutter="40">
      <el-col :span="15" :offset="0">
        <div class="grid-content">
          <el-row>
            <el-col :span="23" :offset="1">
              <el-card shadow="hover">
                <div class="content-title">
                  <h2>{{data.post_title}}题目</h2>
                </div>
                <p class="content">{{data.post_content}}这是内容哈哈哈</p>
                <el-col :span="6" :push="2"></el-col>
                <el-col :span="24">
                  <div class="list-content"></div>
                </el-col>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content">
          <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
          <p></p>
          <b>最近文章</b>
          <p></p>
          <el-card class="box-card">
            <div v-for="(data,i) in dataAll" :key="i" class="text item">
              
              <div @click="goArticle(data.id)">{{data.post_title}}</div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getPosts, getPostshome } from "./api";
export default {
  data() {
    return {
      data: {},
      dataAll:[]
    };
  },

  created() {
    
    var id = this.$route.params.ArticleId;
    
    getPosts(id).then(res => {
      console.log(res);

      if (res.code === 200) {
        this.data = res.data;
      }
    });
    getPostshome().then(res1=>{
      if(res1.code === 200){
        this.dataAll = res1.data.pageResult;
        console.log(this.dataAll)
      }
    })
  },
   methods: {
    goArticle(ArticleId){
    
      this.$router.push({ path: `/Article/${ArticleId}`})
    }
  }
};
</script>

<style>
.content-title {
  text-align: center;
}
.content {
  padding: 0 30px;
}
</style>
