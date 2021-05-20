import { shallowMount } from '@vue/test-utils'
import App from '@/components/App.vue'

import { getMockDataTest } from '~/plugins/mockData'

describe('App data', () => {

  const { results, saved } = JSON.parse(getMockDataTest())

  const testCases = [{
      title: 'Initial Render',
      propResults: results,
      propSaved: saved,
      expectedResultIds: ['1', '2', '3'],
      expectedSavedIds: ['4'],

    },
    {
      title: 'Trigger Save id 3',
      propResults: results,
      propSaved: saved,
      triggerSaveIds: ['3'],
      expectedResultIds: ['1', '2', '3'],
      expectedSavedIds: ['4', '3'],
    },
    {
      title: 'Trigger Save id 1, 2',
      propResults: results,
      propSaved: saved,
      triggerSaveIds: ['1', '2'],
      expectedResultIds: ['1', '2', '3'],
      expectedSavedIds: ['4', '1', '2'],
    },
    {
      title: 'Trigger Save id 3 & remove id 4',
      propResults: results,
      propSaved: saved,
      triggerSaveIds: ['3'],
      triggerRemoveIds: ['4'],
      expectedResultIds: ['1', '2', '3'],
      expectedSavedIds: ['3'],
    },
    {
      title: 'Trigger Save id 3 & remove id 3, 4',
      propResults: results,
      propSaved: saved,
      triggerSaveIds: ['3'],
      triggerRemoveIds: ['3', '4'],
      expectedResultIds: ['1', '2', '3'],
      expectedSavedIds: [],
    }
  ]

  testCases.forEach((testCase) => {
    test(testCase.title, async () => {
      const wrapper = shallowMount(App, {
        propsData: {
          results: testCase.propResults,
          saved: testCase.propSaved
        }
      })

      const computedResultIds = wrapper.vm.renderedResults.map(item => item.id).sort()
      const expectedResultIds = testCase.expectedResultIds.sort()
      expect(computedResultIds).toEqual(expectedResultIds)

      const computedSavedIds = wrapper.vm.renderedSaved.map(item => item.id).sort()
      const expectedSavedIds = testCase.expectedSavedIds.sort()
      expect(computedSavedIds).toEqual(expectedSavedIds)
    })
  })
})
