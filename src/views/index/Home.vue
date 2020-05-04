<template>
  <div class="main">
    <el-row :gutter="40">
      <el-col :span="15" :offset="0">
        <div class="grid-content">
          <el-row>
            <el-col :span="23" :offset="1" >
              <el-card shadow="hover" class="list-card box-card" v-for="(data,i) in data" :key="i" > 
                <div @click="goArticle(data.id)">

                
                <el-col :span="16">
                
                    <div class="list-card-title"  >{{data.post_title}}</div>
                  
                </el-col>
                <el-col :span="6" :push="2">
                  <div
                    class="list-card-title list-card-time"
                  >{{data.post_date | compFilter('yyyy-MM-dd hh:mm') }}</div>
                </el-col>
                <el-col :span="24">
                  <div href="#" target="_blank" :underline="false">
                    <div class="list-content" @click="goArticle(data.id)">{{data.post_content}}</div>
                  </div>
                </el-col>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content">
          <!-- <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input> -->
          <p></p>
          <b>最近文章</b>
          <p></p>
          <el-card class="box-card">
            <div v-for="(data,i) in data" :key="i" class="text item" >
              <!-- <el-link href="#" target="_blank"></el-link> -->
              <div @click="goArticle(data.id)">{{data.post_title}}</div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { getPosts } from "./api";

export default {
  name: "Home",

  data() {
    return {
      data: [{}]
    };
  },
  created() {
    getPosts().then(res => {
      console.log(res);
      if (res.code === 200) {
        this.data = res.data.pageResult;
      }
    });
  },
  filters: {
    compFilter: function(value, fmt) {
      let getDate = new Date(value);
      let o = {
        "M+": getDate.getMonth() + 1,
        "d+": getDate.getDate(),
        "h+": getDate.getHours(),
        "m+": getDate.getMinutes(),
        "s+": getDate.getSeconds(),
        "q+": Math.floor((getDate.getMonth() + 3) / 3),
        S: getDate.getMilliseconds()
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (getDate.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      }
      for (let k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length === 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
        }
      }
      return fmt;
    }
  },
  methods: {
    goArticle(ArticleId){
    
      this.$router.push({ path: `/Article/${ArticleId}`})
    }
  }
};
</script>
<style>
.main {
  text-align: left;
  width: 1200px;
  margin: 0 auto;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 1000px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.list-card {
  height: 150px;
  margin-top: 10px;
}
.list-card-title {
  /* margin: 50px; */
  /* margin-top: 40px; */
}
.list-content {
  margin-top: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.list-card-time {
  text-align: right;
  margin-right: 15px;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}
</style>
