import { shallowMount } from '@vue/test-utils'
import Property from '@/components/Property.vue'

import { getMockDataTest } from '~/plugins/mockData'

describe('App data', () => {

  const { results, saved } = JSON.parse(getMockDataTest())

  const testCases = [
    {
      title: 'for resutls, no see add property button',
      isResultsColumn: true,
      isHovering: false,
      isPropertyAdded: false,
      expectedSeeAddPropertyButton: false,
      expectedSeeRemovePropertyButton: false
    },
    {
      title: 'for resutls, on hover, see add property button',
      isResultsColumn: true,
      isHovering: true,
      isPropertyAdded: false,
      expectedSeeAddPropertyButton: true,
      expectedSeeRemovePropertyButton: false
    },
    {
      title: 'for results, on hover, if already added, see already added notification',
      isResultsColumn: true,
      isHovering: true,
      isPropertyAdded: true,
      expectedSeeAddPropertyButton: false,
      expectedSeeAlreadyAddedNotification: true,
      expectedSeeRemovePropertyButton: false
    },
    {
      title: 'for saved property, no see remove property button',
      isResultsColumn: false,
      isSavedColumn: true,
      isHovering: false,
      expectedSeeAddPropertyButton: false,
      expectedSeeAlreadyAddedNotification: false,
      expectedSeeRemovePropertyButton: false
    },
    {
      title: 'for saved property, on hover, see remove property button',
      isResultsColumn: false,
      isSavedColumn: true,
      isHovering: true,
      expectedSeeAddPropertyButton: false,
      expectedSeeAlreadyAddedNotification: false,
      expectedSeeRemovePropertyButton: true
    }
  ]

  testCases.forEach((testCase, i) => {
    
  })
})