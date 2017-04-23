/**
 * Created by cm on 2017/4/5.
 */
// CRUD SQL语句
var user = {

    queryAllById: 'select * from git_analysis_author where author=?',
    queryById: 'SELECT week,line_all FROM git_analysis_author where author =?'
};

module.exports = user;