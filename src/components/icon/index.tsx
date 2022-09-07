import { Install } from './Install'
import { ArrowRight } from './ArrowRight'
import { MetaMask } from './MetaMask'
import { MetaMaskFlask } from './MetaMaskFlask'
import { Close } from './Close'
import { Chrome } from './Chrome'
import { Firefox } from './Firefox'
import { Brave } from './Brave'
import { Edge } from './Edge'
import { Aptos } from './Aptos'
import { Connect } from './Connect'
import { Reveal } from './Reveal'
import { Send } from './Send'
import { Receive } from './Receive'
import { Menu } from './Menu'
import { Swap } from './Swap'
import { Transaction } from './Transaction'
import { Import } from './Import'
import { NFT } from './NFT'
import { Check } from './Check'
import { Github } from './Github'
import { Settings } from './Settings'
import { Wallet } from './Wallet'
import { Back } from './Back'
import { Scan } from './Scan'
import { Connected } from './Connected'
import { Disconnected } from './Disconnected'
import { Refresh } from './Refresh'
import { Discord } from './Discord'
import { IconProps } from './types'
import React, { Attributes, FunctionComponent } from 'react'

export function Icon () {
  return <></>
}

function format (component: FunctionComponent) {
  return function Icon (props: IconProps) {
    return (
      <span style={{
        display: 'inline-flex',
        alignItems: 'center'
      }}>{'\u200b'}{React.createElement(component, props as Attributes)}</span>
    )
  }
}

Icon.MetaMask = format(MetaMask)
Icon.MetaMaskFlask = format(MetaMaskFlask)
Icon.Chrome = format(Chrome)
Icon.Firefox = format(Firefox)
Icon.Brave = format(Brave)
Icon.Edge = format(Edge)
Icon.Aptos = format(Aptos)
Icon.Import = format(Import)
Icon.Back = format(Back)
Icon.ArrowRight = format(ArrowRight)
Icon.Install = format(Install)
Icon.Close = format(Close)
Icon.Check = format(Check)
Icon.Connect = format(Connect)
Icon.Connected = format(Connected)
Icon.Disconnected = format(Disconnected)
Icon.Reveal = format(Reveal)
Icon.Send = format(Send)
Icon.Receive = format(Receive)
Icon.Swap = format(Swap)
Icon.Transaction = format(Transaction)
Icon.NFT = format(NFT)
Icon.Github = format(Github)
Icon.Discord = format(Discord)
Icon.Menu = format(Menu)
Icon.Settings = format(Settings)
Icon.Wallet = format(Wallet)
Icon.Back = format(Back)
Icon.Scan = format(Scan)
Icon.Refresh = format(Refresh)
