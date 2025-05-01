#### MongoDB下载

https://www.mongodb.com/try/download/community

#### MongoDB简介

+ 文档型数据库, 类似JSON
+ NoSQL = No only SQL
+ 几个关键概念
  + 数据库(Database), 存储数据的容器, 类似于关系数据库中的数据库
  + 集合(Collection), 数据库中的一个集合, 类似于关系数据库中表
  + 文档(Document), 集合中的一个数据记录, 类似于关系数据库中的行(row), 以BSON格式存储

#### MongoDB基础命令

```shell
# 连接到MongoDB
mongo --host <hostname> --post <port>
mongo -u <username> -p <password>

# 查看当前数据库
db

# 显示数据库列表
show dbs

# 查看已有集合
show collections
show tables

# 切换到指定数据库(若不存在,自动创建)
use <database_name>

# 创建集合
db.createCollection("collection")

# 删除数据库(需切换到指定数据库后再删)
db.dropDatabase()

# 删除集合
db.<collection_name>.drop()

# 查询操作,一些高级查询方法详见 https://www.runoob.com/mongodb/mongodb-query.html
db.<collection_name>.find(query, projection)
db.<collection_name>.findOne(query, projection)

# 查询格式化输出
db.<collection_name>.find().pretty()

# 限制查询结果返回的文档数量
db.<collection_name>.find().limit(<limit>)

# 跳过指定数量的文档
db.<collection_name>.find().skip(<skip>)

# 排序
db.<collection_name>.find().sort()

# 插入操作
db.<collection_name>.insertOne(document, options)
db.<collection_name>.insertMany(documents, options)

# 更新操作
db.<collection_name>.updateOne(filter, update, options)
db.<collection_name>.updateMany(filter, update, options)

# 删除操作
db.<collection_name>.deleteOne(filter, options)
db.<collection_name>.deleteMany(filter, options)

# 退出
quit()或者exit

# 数据备份/导出数据
mongodump -h <hostname><:port> -d dbname -o dbdirectory  # BSON 
mongoexport -h <hostname><:port> -d dbname -o dbdirectory  # JSON 或 CSV 

# 数据恢复/导入数据
mongorestore -h <hostname><:port> -d dbname <path>  # BSON 
mongoimport -h <hostname><:port> -d dbname <path>  # JSON 或 CSV 
```

#### MongoDB一些数据类型

| 数据类型           | 描述                     |
| ------------------ | ------------------------ |
| String             | 字符串                   |
| Integer            | 整型数值                 |
| Boolean            | 布尔值                   |
| Double             | 双精度浮点值             |
| Array              | 数组                     |
| Timestamp          | 时间戳                   |
| Object             | 用于内嵌文档             |
| Date               | 日期时间                 |
| Object ID          | 对象ID, 用于创建文档的ID |
| Binary Data        | 二进制数据               |
| Code               | 代码类型                 |
| Regular expression | 正则表达式类型           |

#### MongoDB用户管理

```shell
# 创建用户
db.createUser({
	user: "username",
	pwd: "pwd",
	roles: [
		{ role: "readWrite", db: "<database_name>" },
		{ role: "dbAdmin", db: "<database_name>" }
	]
})

# 验证用户
db.auth("username", "pwd")

# 删除用户
db.dropUser("username")
```

#### 覆盖MongoDB默认配置

+ 创建配置文件

  > mongod.conf（Linux）或  mongod.cfg（Windows）

  ```yaml
  net:
    bindIp: 0.0.0.0  # 允许远程访问
    port: 27017
  security:
    authorization: enabled  # 启用认证
  storage:
    dbPath: /var/lib/mongo  # 自定义数据存储路径
  systemLog:
    destination: file
    path: /var/log/mongodb/mongod.log  # 自定义日志路径
  ```

+ 启动时指定配置文件

  > mongod --config mongod.conf

#### MongoDB URI 连接语法

+ 基础URI连接

  > mongodb://user:password@localhost:27017/database

+ 其他连接 

  https://www.runoob.com/mongodb/mongodb-connections.html









