<template lang="pug">
  #map(ref="map")
</template>

<script>
  export default {
    data () {
      return {
        marker: null
      }
    },
    mounted () {
      this.$nextTick(() => {
        let position = { lat: 25.0530338, lng: 121.5079483 }

        let styledMapType = new google.maps.StyledMapType([
          {
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }]
          },
          {
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }]
          },
          {
            elementType: 'labels.text.fill',
            stylers: [{ color: '#616161' }]
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#f5f5f5' }]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#bdbdbd' }]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#eeeeee' }]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#e5e5e5' }]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }]
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#dadada' }]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#616161' }]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{ color: '#e5e5e5' }]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{ color: '#eeeeee' }]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#c9c9c9' }]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
          }
        ])

        let map = new google.maps.Map(this.$refs.map, {
          zoom: 16,
          center: position
        })

        map.mapTypes.set('styled-map', styledMapType)
        map.setMapTypeId('styled-map')

        this.marker = new google.maps.Marker({
          // icon: require('~/assets/images/map-marker.svg'),
          position,
          map
        })
      })
    }
  }
</script>

<style lang="scss" scoped>
  #map {
    height: 600px;
    width: 100%;
  }
</style>
