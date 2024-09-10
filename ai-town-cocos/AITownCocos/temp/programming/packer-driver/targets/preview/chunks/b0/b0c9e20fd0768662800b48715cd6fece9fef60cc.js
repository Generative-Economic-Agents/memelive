System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, WorkCatModel, Log, AWSManager, _crd;

  function _reportPossibleCrUseOfWorkCatModel(extras) {
    _reporterNs.report("WorkCatModel", "../model/WorkCatModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLog(extras) {
    _reporterNs.report("Log", "../../../assets/src/utils/LogUtils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      WorkCatModel = _unresolved_2.default;
    }, function (_unresolved_3) {
      Log = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0806bSCMABBro2hJtgu3rDq", "WASManager", undefined); // import * as AWS from '../../../node_modules/aws-sdk/dist/aws-sdk.min.js'


      AWSManager = class AWSManager {
        constructor() {
          //     // 创建一个 S3 实例
          this.s3 = void 0;
          this.AWS = void 0;
        }

        setConfig() {
          this.AWS = window.AWS; // 配置 AWS 的区域和凭证
          // 这些值应该从环境变量或你的配置管理系统中获取

          this.AWS.config.update({
            region: 'ap-southeast-1',
            // 替换为你的 S3 存储桶区域
            credentials: new this.AWS.Credentials({
              accessKeyId: 'AKIA5FTZD3LOHMBXBUEU',
              // 替换为你的 Access Key ID
              secretAccessKey: '8Ggq1a899n6s6MeMtugtpIR7DP2gkIU7vYmxN/z0' // 替换为你的 Secret Access Key

            })
          });
          this.s3 = new this.AWS.S3();
        } //     // static get instance() {
        //     //     if (this._instance) {
        //     //         return this._instance;
        //     //     }
        //     //     this._instance = new AWSManager();
        //     //     return this._instance;
        //     // }
        //     // 假设你有一个 cc.Texture2D 对象，你想要上传它的图片数据


        uploadTextureToS3(picbuf, bucketName, fileName) {
          // 获取图片数据 ArrayBuffer
          // const data = texture.getImage().data;
          var blob = new Blob([picbuf], {
            type: 'image/jpeg'
          }); // 创建一个上传参数对象

          var uploadParams = {
            Bucket: bucketName,
            Key: fileName,
            Body: picbuf,
            ACL: 'public-read' // 如果你想要图片公开访问的话,
            //ContentType: 'image/jpeg',

          }; // 调用 S3 的上传函数

          this.s3.upload(uploadParams, (err, data) => {
            if (err) {
              (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
                error: Error()
              }), Log) : Log).log("Error uploading data: ", err);
            } else {
              (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
                error: Error()
              }), Log) : Log).log("Successfully uploaded data to " + bucketName + "/" + fileName); //window.open('https://telegram.me/share/url?url=' + encodeURIComponent(data.Location) + encodeURIComponent('https://www.infinitytest.cc/waitlist'), '_blank')

              var content = "https://www.infinitytest.cc/waitlist";
              var encodedContent = btoa(content); // 使用Base64编码内容

              var shareUrl = "https://telegram.me/share/url?url=" + encodeURIComponent(data.Location) + "'&text=\uD83D\uDC31\u2728 Join the Cat Academia waitlist now to win over $2000 in rewards: " + encodeURIComponent(content);
              window.open(shareUrl, '_blank');
              (_crd && WorkCatModel === void 0 ? (_reportPossibleCrUseOfWorkCatModel({
                error: Error()
              }), WorkCatModel) : WorkCatModel).shareDone = true;
            }
          });
        }

      };
      AWSManager._instance = void 0;

      _export("default", new AWSManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b0c9e20fd0768662800b48715cd6fece9fef60cc.js.map