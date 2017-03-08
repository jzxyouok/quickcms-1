
/*
    该文件为核心配置文件,由CMS安装成功之后生成,轻易改动会造成严重错误
    如忘记创始人密码可以在此修改(默认为20分钟一次进行创始人账号同步)
    
    account以及accountpass为选填项,填写在quickcms注册的账号密码,用于分享风格以及以后的拓展
*/
module.exports = {
    port:3000,//服务器端口
    sqlhost:'',//mysql地址
    database:'',//mysql数据库
    sqlport:3306,//sql port
    user:'',//mysql用户
    password:'',//mysql密码
    pre:'',//数据表前缀
    sessionKey:'kRj7CIWYxwVbW6hzfw6u4ybTg2fzMDGLkFlp',//session key
    email:'',//邮箱
    admin:'',//创始人
    pass:'',//创始人密码
    panelStyle:'default(zh)',//面板默认样式
    service:'http://service.quickcms.cn:3050/',
    account:'',
    accountpass:'',
    roles:[
        [
            {
                name:'系统',
                key:'system'
            }
        ],
        [
            {
                name:'内容',
                key:'content'
            },
            {
                name:'列表集',
                key:'collections'
            },
            {
                name:'媒体库',
                key:'media'
            },
            {
                name:'分类',
                key:'categories'
            },
            {
                name:'留言',
                key:'comments'
            }
        ],
        [
            {
                name:'用户',
                key:'users'
            },
            {
                name:'用户组',
                key:'groups'
            },
        ],
        [
            {
                name:'样式',
                key:'styles'
            },
            {
                name:'样式中心',
                key:'stylescenter'
            }
        ],
        [
            {
                name:'拓展',
                key:'extensions'
            },
            {
                name:'拓展中心',
                key:'extensionscenter'
            }
        ]
    ]
}
