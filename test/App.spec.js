import { shallowMount } from '@vue/test-utils'
import App from '@/components/App.vue'

import { getMockDataTest } from '~/plugins/mockData'

describe('App data', () => {

  const { results, saved } = JSON.parse(getMockDataTest())

  const testCases = [{
      title: 'Initial Render',
      triggerSaveIds: [],
      triggerRemoveIds: [],
      expectedResultIds: ['1', '2', '3'],
      expectedSavedIds: ['4'],
    },
    {
      title: 'Trigger Save id 3',
      triggerSaveIds: ['3'],
      triggerRemoveIds: [],
      expectedResultIds: ['1', '2', '3'],
      expectedSavedIds: ['4', '3'],
    },
    {
      title: 'Trigger Save id 1, 2',
      triggerSaveIds: ['1', '2'],
      triggerRemoveIds: [],
      expectedResultIds: ['1', '2', '3'],
      expectedSavedIds: ['4', '1', '2'],
    },
    {
      title: 'Trigger Save id 1, 2, 3',
      triggerSaveIds: ['1', '2'],
      triggerRemoveIds: [],
      expectedResultIds: ['1', '2', '3'],
      expectedSavedIds: ['4', '1', '2', '3'],
    },
    {
      title: 'Trigger Save id 3 & remove id 4',
      triggerSaveIds: ['3'],
      triggerRemoveIds: ['4'],
      expectedResultIds: ['1', '2', '3'],
      expectedSavedIds: ['3'],
    },
    {
      title: 'Trigger Save id 1, 3 & remove id 3, 4',
      triggerSaveIds: ['3'],
      triggerRemoveIds: ['3', '4'],
      expectedResultIds: ['1', '2', '3'],
      expectedSavedIds: ['1'],
    }
  ]

  testCases.forEach((testCase) => {
    test(testCase.title, async () => {
      const wrapper = shallowMount(App, {
        propsData: {
          results,
          saved
        }
      })

      // If available, invoke save property function
      testCase.triggerSaveIds.forEach((triggerSaveId) => {
        wrapper.vm.saveProperty(triggerSaveId)
      })

      // If available, invoke remove property function
      testCase.triggerRemoveIds.forEach((triggerRemoveId) => {
        wrapper.vm.removeProperty(triggerRemoveId)
      })

      // Compare id's of renderedResults to expectedResults
      const computedResultIds = wrapper.vm.renderedResults.map(item => item.id)
      const expectedResultIds = testCase.expectedResultIds
      expect(computedResultIds).toEqual(expectedResultIds)

      // Compare id's of renderedSaved to expectedSaved
      const computedSavedIds = wrapper.vm.renderedSaved.map(item => item.id)
      const expectedSavedIds = testCase.expectedSavedIds
      expect(computedSavedIds).toEqual(expectedSavedIds)
    })
  })
})
