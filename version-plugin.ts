// 此文件方法专门生成一个文件，里面记录了版本号，此刻暂时不需要
const FStream = require('fs');

const path = require('path');

const version = new Date().getTime()


/**
 * 版本信息生成插件
 */
function VersionPlugin(options) {
	this.options = options || {}
	!this.options.versionDirectory && (this.options.versionDirectory = 'static');
	!this.options.version && (this.options.version = 'Version');

}

VersionPlugin.prototype.apply = function (compiler) {
	var self = this;
	compiler.plugin("compile", function (params) {
		// 写入json文件到 public 目录
		writeVersionjsonFile(self);
		writeVersionModuleFile(self);
	});
	//编译器'对'所有任务已经完成'这个事件的监听
	compiler.plugin("done", function (stats) {
		console.log("应用编译完成！");
	});
};

const writeVersionjsonFile = (self) => {
	var dir_path = path.join('public', self.options.versionDirectory); //this.options.context + '/' + self.options.versionDirectory;
	var version_file = dir_path + '/version.json';
	var content = '{"version":' + self.options.version + '}';
	console.log("\n当前版本号：" + self.options.version);
	FStream.exists(dir_path, function (exist) {
		if (exist) {
			writeFile(self, version_file, content);
			return;
		}
		FStream.mkdir(dir_path, function (err) {
			if (err) throw err;
			console.log('\n创建目录[' + dir_path + ']成功');
			writeFile(self, version_file, content);
		});
	});
}

const writeVersionModuleFile = (self) => {
	var version_file = path.join('.env.local');
	var content = 'VUE_APP_VERSION = ' + self.options.version;
	writeFile(self, version_file, content);
}


const writeFile = (self, versionFile, content) => {
	console.log("开始写入文件...");
	//写入文件
	FStream.writeFile(versionFile, content, function (err) {
		if (err) throw err;
		console.log("版本信息写入成功!");
	});
}

module.exports = VersionPlugin;
