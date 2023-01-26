// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = <div className="box box--small">small lightblue box</div>
const mediumBox = <div className="box box--medium">medium pink box</div>
const largeBox = <div className="box box--large">large orange box</div>

function Box({css1, css2}) {
    return (
        <div style={{fontStyle: css2}} className={css1}>
            small lightblue box
        </div>
    )
}

function App() {
    return (
        <div>
            <Box css1='box' css2='italic'/>
            {smallBox}
            {mediumBox}
            {largeBox}
        </div>
    )
}

export default App
