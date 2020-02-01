<template>
  <div class="dashboard">
    <h2>全国疫情数据</h2>
    <p class="subtitle" v-if="dash.modifyTime">
      截至 {{ dash.modifyTime | formatDate }}
    </p>
    <ul class="list">
      <li>
        <strong class="confirmed">{{ dash.confirmedCount }}</strong>
        <div>确诊</div>
      </li>
      <li>
        <strong class="suspect">{{ dash.suspectedCount }}</strong>
        <div>疑似</div>
      </li>
      <li>
        <strong class="dead">{{ dash.deadCount }}</strong>
        <div>死亡</div>
      </li>
      <li>
        <strong class="cured">{{ dash.curedCount }}</strong>
        <div>治愈</div>
      </li>
    </ul>
  </div>
</template>

<script>
import Dash from '../models/dash'

export default {
  data() {
    return {
      dash: {}
    }
  },
  mounted() {
    this.getDash()
  },
  methods: {
    async getDash() {
      const res = await Dash.getDash()
      this.dash = res
    }
  },
  filters: {
    formatDate: function(value) {
      const date = new Date(value + 8 * 3600 * 1000)
      return date
        .toJSON()
        .substr(0, 19)
        .replace('T', ' ')
        .replace(/-/g, '.')
    }
  }
}
</script>

<style lang="less" scoped>
.dashboard {
  margin: 20px 15px;
  padding: 20px;
  background: #fff;
  border-radius: 2px;
  line-height: 1.5;
  h2 {
    font-size: 14px;
  }
  .subtitle {
    font-size: 10px;
    color: #666;
  }
  .list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    li {
      text-align: center;
      strong {
        font-size: 18px;
      }
      & :last-child {
        font-size: 12px;
        transform: scale(0.8);
        color: #666;
      }
      .confirmed {
        color: @danger;
      }
      .suspect {
        color: @warning;
      }
      .dead {
        color: @gray;
      }
      .cured {
        color: @green;
      }
    }
  }
}
</style>
