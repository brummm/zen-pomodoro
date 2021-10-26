import React, {FC, useEffect, useState} from 'react'
import {Time, TimeType} from '../../../models/Time'
import {Text, TextBig, TextSmall} from '../../../styles/global'

interface StartLabelProps {
  timer?: number
  nextTime?: Time
  current?: number
  defaultValuesForText: any
}
export const StartLabel: FC<StartLabelProps> = ({timer, nextTime, current, defaultValuesForText}) => {
  console.log(nextTime)
  let element: JSX.Element | null = null
  if (current === undefined) {
    element = <TextSmall {...defaultValuesForText}>Tap to start</TextSmall>
  } else if (timer === undefined && nextTime !== undefined) {
    switch (nextTime.type) {
      case TimeType.FOCUS:
        element = <TextSmall {...defaultValuesForText}>Tap to focus.</TextSmall>
        break
      case TimeType.INTERVAL:
        element = <TextSmall {...defaultValuesForText}>Tap to take a break.</TextSmall>
        break
      case TimeType.BIG_INTERVAL:
        element = (
          <>
            <Text {...defaultValuesForText}>Well done!</Text>
            <TextSmall {...defaultValuesForText}>Tap to take a big break.</TextSmall>
          </>
        )
    }
  }

  return element
}

export default StartLabel
