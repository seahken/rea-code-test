import { shallowMount } from '@vue/test-utils'
import Property from '@/components/Property.vue'

import { getMockDataTest } from '~/plugins/mockData'

describe('App data', () => {

  const { results, saved } = JSON.parse(getMockDataTest())

  // for results, on hover, see add property button

  // for results, on hover, if already added, ???

  // for resutls, see no add property button

  // for saved property, on hover, see remove property button

  // for saved property, see no remove property button
})
