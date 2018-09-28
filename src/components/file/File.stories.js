import React from 'react'
import { storiesOf } from '@storybook/react'
import { checkA11y } from '@storybook/addon-a11y'
import { File } from './File'

const wrapperClass = 'ma3 sans-serif'

storiesOf('File', module)
  .addDecorator(checkA11y)
  .add('Default', () => (
    <div className={wrapperClass}>
      <File
        hash='Qm3fsA'
        name='game-of-thrones.mkv'
        size={265318832} />
    </div>
  ))
  .add('Adding', () => (
    <div className={wrapperClass}>
      <File
        hash='Qm3fsA'
        name='game-of-thrones.mkv'
        size={265318832}
        progress={70} />
    </div>
  ))
  .add('Added', () => (
    <div className={wrapperClass}>
      <File
        hash='Qm3fsA'
        name='game-of-thrones.mkv'
        size={265318832}
        progress={100} />
    </div>
  ))
  .add('Errored', () => (
    <div className={wrapperClass}>
      <File
        hash='Qm3fsA'
        name='game-of-thrones.mkv'
        size={265318832}
        progress={100}
        error={'error'} />
    </div>
  ))
  .add('Download', () => (
    <div className={wrapperClass}>
      <File
        hash='Qm3fsA'
        name='game-of-thrones.mkv'
        size={265318832}
        progress={100}
        isDownload />
    </div>
  ))
  .add('Folder', () => (
    <div className={wrapperClass}>
      <File
        hash='Qm3fsA'
        name='game-of-thrones'
        type='directory' />
    </div>
  ))
