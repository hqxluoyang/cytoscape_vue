<style type="text/css">
  #contant {
    width: 600px;
    margin: 200px auto 0;
  }
</style>
<template>
	<div id='box'>
    <div id='contant'>

      <el-form :model="ruleForm2"  ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="checkPass">
          <el-input  v-model="ruleForm2.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密  码" prop="pass">
          <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button  type="primary" @click="submitForm('ruleForm2')">提交
          </el-button>
            <!-- <iframe src="vueControl.html#/roomImgUpload?serial=信息机房" frameborder="0"></iframe> -->
          
          <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
        </el-form-item>
      </el-form>
    </div>
	</div>
</template>
<script>
import Vue from "vue";
import sha1 from "../utils/sha1.js";
import $ from "jquery";
// import jsencrypt from "jsencrypt";
import { JSEncrypt } from 'jsencrypt' 
import axios from "axios";

/***
*workOrder/excutPanel&&anonymous 下的 baseUrl 本地测试加api 压缩不加api
*其他样式参照业务资源管理和工单已经用户设置
***/
export default {
  name: "test",
  data() {
    return {
      ruleForm2: {
        username: "zhouliyuan", //dongxin                     zhongtao
        password: "Admin@1124" // 1qaz3edc!  1qaz3edc@      admin@1234
        //username: "lijinsong", //dongxin                     zhongtao
        //password: "adminA12." // 1qaz3edc!  1qaz3edc@      admin@1234
      },
    }
  },
  mounted () {
   this.submitForm()
  },
 
  methods: {
    submitForm(formName) {
      // this.$refs.ruleForm2.validate(result => {
        let result = true;
        if (result) {
          console.log(this.ruleForm2.username);
          // this.ruleForm2.username = 'dongxin';
          // this.ruleForm2.password = '1qaz3edc!';

          var that = this;
          var username = this.ruleForm2.username;
          var password = this.ruleForm2.password;
          var encrytext = sha1.hex_sha1(password);
          var encrytext = sha1.hex_sha1(password) + password;
          var publicKey =
            "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAmdDHzrUi0aPoGaKh6512QpxnL1jBLNKjlu7XhRDe/yclq6Y8jLRO1TP7TU0on7mOVJPklZP85u+mqfZ56sWfFeIqneLnRCVEZgEBm7oX2h+MPvDuH8K8n0ffPcIS1tk75qu1BQ3YyEP+MwCOy19LS0pguOJDlT5rZFPEBeqULYb1EZzNjRUfWLwSgwrN9uQJopbm53WSupepbGHc0NwR/08plU8qYwic7AUX9MLc1VP1DK7BQZl9TeNDi38f81mNWg3gpm7N4OZoQhJFt/ngJaGmTvde68lhHK0Gu5xqtoNDxeQ4N3kz48AdVWxE195RL4iR+jCO9Iakbs0BYEsPl4RgfaE8IahNhqd3sjO8hBPgJiWTs6VeUiiB5RZtPGz62DpUJphRVqB55CPxM9Hwsn1p8N5ihOS9ooQA1NF9ZnutoyCTrvFivFGd65VZUZDeQcxkiesFDQD5LSlAAtrI3/PNecmrDefdN/+Jthe6EXXRSqof9L9OCizVyFwgeVvQGXK18nP3u3bn2amudzRjzR5EEq7mI8D0LyHEkaqdYjscaD3vQWETwz3e0pyi8ZmnXcJwcvnGuf1QQNUQr6HIGPsIaBp3otvTUq8/vUNWxWh19K36XSzPSPW3JNeFP7s160HIXqreN0fA2P+uHWGLPDlIn9CiQYjgYXylHoGWAnkCAwEAAQ==";
          var encrypt = new JSEncrypt();
          encrypt.setPublicKey(publicKey);
          var encryT = encrypt.encrypt(encrytext);
          
          $.ajax({
            dataType: "json",
            type: "POST",
            url: "/api/user/login/",
            data: {
              username: username,
              password: encryT
            },
            success: function(data) {
              if (data.code == 1) {
                
              }
              that.$router.push("/"); // 用户管理
            }
          });
        } else {
          alert("表达验证不合法");
        }
      //});
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    transferBtn() {
      this.$router.push({
        name: "imageControl",
        params: { server_id: "199568" }
      });
      // this.$router.push({path: '/imageControl/?server_id=199568'})
      // this.$router.push(`/imageControl/?server_id=199568`)
    }
  }
};
</script>
