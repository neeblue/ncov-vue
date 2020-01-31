<template>
  <div id="chart-column"></div>
</template>
<script>
import G2 from '@antv/g2'

export default {
  data() {
    return {
      chart: null
    }
  },
  computed: {
    areaList: function() {
      const sourceData = this.$store.state.areaList
      const list = []
      sourceData.forEach(item => {
        const confirmed = []
        const dead = []
        const cured = []
        confirmed['city'] = item.provinceShortName
        confirmed['type'] = '确诊'
        confirmed['value'] = item.confirmedCount
        dead['city'] = item.provinceShortName
        dead['type'] = '死亡'
        dead['value'] = item.deadCount
        cured['city'] = item.provinceShortName
        cured['type'] = '治愈'
        cured['value'] = item.curedCount
        list.push(confirmed)
        list.push(dead)
        list.push(cured)
      })
      return list
    }
  },
  watch: {
    areaList: function() {
      this.chart.source(this.areaList)
      this.chart.render()
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      if (!this.chart) {
        this.chart = new G2.Chart({
          container: 'chart-column',
          forceFit: true,
          height: 800
        })
        this.chart.source(this.areaList)
        this.chart.legend({
          position: 'bottom-center',
          itemGap: 20,
          marker: 'square'
        })
        this.chart.coord().transpose()
        this.chart
          .interval()
          .position('city*value')
          .opacity(1)
          .color('type', ['#f74c31', '#5d7092', '#28b7a3'])
          .adjust([
            {
              type: 'dodge',
              marginRatio: 0.3
            }
          ])
        this.chart.render()
      }
    }
  }
}
</script>
