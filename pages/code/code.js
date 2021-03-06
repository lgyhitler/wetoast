// code.js

// 获取应用实例
let app = getApp()

Page({
	onLoad (option) {
		this.type = option.type
		this.setData({type:this.type})

        //创建可重复使用的toast实例，并附加到this上，通过this.wetoast访问
        new app.WeToast()
	},

	onRun () {
		let type = this.type
		this[type + 'Toast']()
	},

	imgToast () {
        this.wetoast.toast({
            img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAMAAADxhdbJAAAAgVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9d3yJTAAAAKnRSTlMA+0IPA2iTLO7YuiXr4/IcCqYkFbKZN/bUiHlbBs7J3L5hTtvDjFFx6Uzm0WRUAAAB20lEQVRo3u3Zy3KCQBCF4R4QFZGL4F0x4jXp93/AVBbmFFMx4MB0pVLz7bv+zdk1OY7jOI7j/C3ROh6RGG/MPBXrBYpZrDcYMrNYz5/ww5Ssi0L+FpM1GAlqOVkWKIkaRiJRw0jgLSW7olCy5o1FahgJhNZqGAmsC7LKn0jWolCmhpFAaa2GkcDBJyswEsGaPxGqYSRwsVbDSOCYkU2BkqhhJEI1jAQm1moYCcz3ZJE3lqwFSqqGkcDMXg0jQW1A9kShcS39MBiJcc0/89w3GgksUGsyY+bzyGQkqFFrFX9ZVQYjMahFyeMmazuSDrWs5IcyNxoJX6m9IUNyMxgJb+gF9evroHEkJjW4cs0lbRiJWQ0WXPPutRgJbOlVM65R24aRGNVgoPV4XjSOBDWD3pzr4mXDSFAzsdd7KmgxEr6ToezImlnWNBIOyFh2Yc16pI+kew38A2uSnT6S7jXwS9YN909HoirqqFiz7pA+GYnaUWfFmXXjXeGF/dYgfeNmqHXvxa1qN+pJ3qKnTtSb0VSmhp5EDZYJ/2LlEQn0UOudtxKpoackanD6sZcsyZKbkqjBTknUoBKpQcAg8Te6i9RgK1KDjWANvTgnIQvURGxUmZPjOI7jOM7/9wkPMejs5BepRwAAAABJRU5ErkJggg=='
        })
    },

    titleToast () {
        this.wetoast.toast({
            title: 'WeToast'
        })
    },

    timeToast () {
        this.wetoast.toast({
            title: 'WeToast',
            duration: 5000
        })
    },

    fullToast () {
        this.wetoast.toast({
            img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAMAAADxhdbJAAAAgVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9d3yJTAAAAKnRSTlMA+0IPA2iTLO7YuiXr4/IcCqYkFbKZN/bUiHlbBs7J3L5hTtvDjFFx6Uzm0WRUAAAB20lEQVRo3u3Zy3KCQBCF4R4QFZGL4F0x4jXp93/AVBbmFFMx4MB0pVLz7bv+zdk1OY7jOI7j/C3ROh6RGG/MPBXrBYpZrDcYMrNYz5/ww5Ssi0L+FpM1GAlqOVkWKIkaRiJRw0jgLSW7olCy5o1FahgJhNZqGAmsC7LKn0jWolCmhpFAaa2GkcDBJyswEsGaPxGqYSRwsVbDSOCYkU2BkqhhJEI1jAQm1moYCcz3ZJE3lqwFSqqGkcDMXg0jQW1A9kShcS39MBiJcc0/89w3GgksUGsyY+bzyGQkqFFrFX9ZVQYjMahFyeMmazuSDrWs5IcyNxoJX6m9IUNyMxgJb+gF9evroHEkJjW4cs0lbRiJWQ0WXPPutRgJbOlVM65R24aRGNVgoPV4XjSOBDWD3pzr4mXDSFAzsdd7KmgxEr6ToezImlnWNBIOyFh2Yc16pI+kew38A2uSnT6S7jXwS9YN909HoirqqFiz7pA+GYnaUWfFmXXjXeGF/dYgfeNmqHXvxa1qN+pJ3qKnTtSb0VSmhp5EDZYJ/2LlEQn0UOudtxKpoackanD6sZcsyZKbkqjBTknUoBKpQcAg8Te6i9RgK1KDjWANvTgnIQvURGxUmZPjOI7jOM7/9wkPMejs5BepRwAAAABJRU5ErkJggg==',
            title: 'WeToast',
            success (data) {
                console.log(Date.now() + ': success')
            },
            fail (data) {
                console.log(Date.now() + ': fail')
            },
            complete (data) {
                console.log(Date.now() + ': complete')
            }
        })
    },

    back () {
        wx.navigateBack()
    }
})
