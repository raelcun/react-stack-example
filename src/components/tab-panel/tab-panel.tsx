import React from 'react'

import { TabPanelProps } from './types'

export const TabPanel: React.FC<TabPanelProps> = ({ children, selectedTabIndex, index }) => (
  <>{selectedTabIndex === index && children}</>
)
