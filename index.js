module.exports = {
    aor: {
        action: {
            delete: '删除',
            show: '显示',
            list: '列表',
            save: '保存',
            create: '新建',
            edit: '编辑',
            cancel: '取消',
            refresh: '刷新',
            add_filter: '添加搜索条件',
            remove_filter: '删除搜索条件',
			back: '返回',
        },
        boolean: {
            true: '是',
            false: '否',
        },
        page: {
            list: '%{name} 列表',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: '新建 %{name}',
            delete: '删除 %{name} #%{id}',
            dashboard: '控制台',
            not_found: '没有找到',
        },
        input: {
            file: {
                upload_several:
                    '拖动一些文件或点击上传.',
                upload_single: '拖动一个文件或点击上传.',
            },
            image: {
                upload_several: '拖动一些图片文件或点击上传.',
                upload_single: '拖动一个图片文件或点击上传.',
            },
        },
        message: {
            yes: '是',
            no: '否',
            are_you_sure: '你确定?',
            about: '关于',
            not_found:
                '输入了一个错误的URL,或者非法的超链接.',
        },
        navigation: {
      	    no_results: '找不到记录',
            page_out_of_boundaries: '%{page}不在范围内',
            page_out_from_end: '超过最后1页',
            page_out_from_begin: '超出第一页',
            page_range_info: '%{offsetBegin}-%{offsetEnd} 一共 %{total}',
            next: '下一页',
            prev: '上一页',
        },
        auth: {
            username: '用户名',
            password: '密码',
            sign_in: '登录',
            sign_in_error: '验证失败,请重试',
            logout: '注销',
        },
        notification: {
            updated: '记录已更新',
            created: '记录已新建',
            deleted: '记录已删除',
            item_doesnt_exist: '记录不存在',
            http_error: '服务器通讯错误',
        },
        validation: {
            required: '必须',
            minLength: '至少%{min}个字符',
            maxLength: '必须不大于%{max}个字符',
            minValue: '至少是%{min}',
            maxValue: '不超过%{max}',
            number: '必须是数字',
            email: '必须是合法的email地址',
        },
    },
};
