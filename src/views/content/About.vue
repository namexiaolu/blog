<template>
  <div class="about">
    <el-row :gutter="20">
      <el-col :span="12" :offset="4">
        <div class="grid-content bg-purple-dark">
          <el-col :span="20" :offset="2">
            <div class="bg-purple content-title">{{title}}</div>
          </el-col>
          <el-col :span="4" :offset="18">
            <div class="bg-purple content-title"></div>
          </el-col>
          <el-col :span="20" :offset="2">
            <div class="bg-purple content">
              <p>
                {{content}}
              </p>
            </div>
          </el-col>
        </div>
      </el-col>

      <el-col :span="4" :push="0">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>
  </div>
</template>

<style >
.content-title {
  /* height: 50px; */
  line-height: 50px;
}
.content {
  text-align: left;
}
</style>

<script>
import {getPosts} from './api'
export default {
  name: "Home",
  data(){
    return{
      title: '',
      publish_time: '',
      content: ''
    }
  },
  created(){
    getPosts().then(res =>{
      if(res.code === "200"){
        this.title = res.data.title
        this.content = res.data.content
      }

    })
  }
};
</script>
