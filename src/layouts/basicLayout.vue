<template>
  <div>
    <h2>新型冠状病毒 2019-nCoV 疫情数据</h2>
    <Dashboard />
    <div class="navigation-panel">
      <div class="navigations">
        <template v-for="(item, index) in naviList">
          <div
            :key="index"
            class="nav"
            :style="{ background: item.bgColor, color: item.color }"
            @click="onNavigator(item.url)"
          >
            <i :class="['iconfont', item.icon]" />
          </div>
        </template>
      </div>
      <div class="title">{{ cateTitle }}</div>
    </div>
    <div style="margin: 20px 15px;">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <div class="footer">
      <p class="source">
        数据来自<a
          href="https://3g.dxy.cn/newh5/view/pneumonia"
          target="view_window"
          >丁香园</a
        >
      </p>
      <p class="contact">
        建议反馈：<a href="mailto: npm@tom.com">npm@tom.com</a>
      </p>
    </div>
  </div>
</template>

<script>
import Dashboard from '@/components/dashboard'
import Area from '../models/area'

export default {
  components: {
    Dashboard
  },
  data() {
    return {
      cateTitle: '',
      naviList: [
        {
          name: '柱状图',
          url: '/column',
          color: '#516775',
          bgColor: '#d3e6ff',
          icon: 'icon-tubiaozhuzhuangtu'
        },
        {
          name: '',
          url: '/line',
          color: '#719e64',
          bgColor: '#eaefed',
          icon: 'icon-zhexiantu'
        },
        {
          name: '',
          url: '/pie',
          color: '#d93d4f',
          bgColor: '#ffe8eb',
          icon: 'icon-bingzhuangtu'
        },
        {
          name: '',
          url: '/map',
          color: '#D9911B',
          bgColor: '#FEF2DE',
          icon: 'icon-ditu'
        }
      ]
    }
  },
  mounted() {
    this.chooseNavigationTitle()
    this.getAreaData()
  },
  methods: {
    async getAreaData() {
      const res = await Area.getList()
      this.$store.commit('SET_AREA', res)
    },
    chooseNavigationTitle() {
      const path = this.$route.path
      const title = this.naviList.find(i => {
        return i.url === path
      })
      this.cateTitle = title.name
    },
    onNavigator(url) {
      if (url !== this.$route.path) {
        this.$router.push(url)
      }
    }
  }
}
</script>
<style lang="less" scoped>
h2 {
  text-align: center;
  padding: 20px 0;
  background: #fff;
  font-size: 18px;
  font-weight: 600;
}
.navigation-panel {
  margin: 20px 15px;
  background: #fff;
  padding: 30px 0 25px 0;
  border-radius: 2px;
  .navigations {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    .nav {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .iconfont {
        font-size: 22px;
      }
      .nav-name {
        // margin-top: 2px;
        font-size: 12px;
        transform: scale(0.6);
      }
    }
  }
  .title {
    margin-top: 30px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
.fade-leave-to {
  display: none;
}
.footer {
  text-align: center;
  font-size: 12px;
  margin-bottom: 30px;
  line-height: 2;
  color: #999;
  a {
    text-decoration: none;
    color: #4386f5;
  }
}
</style>
