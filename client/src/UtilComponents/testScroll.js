import React, { Component } from 'react'
import styled from 'styled-components'

import Navbar from '../Pages/Navbar'

const ContainerDiv = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`

const Section = styled.section`
  // position absolute was causing the problem
  // position absolute removed from appjs Section destroys the design
  // Attempting with relative position
  position: relative;
  z-index: 1000;
  height: 100%;
  width: 100vw;
`

const Div = styled.div`
  height: 100%;
  width: 100vw;
`

const P = styled.p`
  margin: 0;
`

class TestScroll extends Component {
  render() {
    const navItems = [{name: 'Home', path: '/'}, {name: 'About', path: '/about'}, {name: 'Blog', path: '/blog'}, {name: 'Contact', path: '/contact'}]
    return (
      <ContainerDiv>
        <Navbar location="/" menuItems={ navItems }/>
        <Section>
        <Div style={{'backgroundColor': 'pink'}}>
          <P>
            Lorem ipsum dolor sit amet, ei pri solet quodsi alterum, volumus molestie pro at, inimicus euripidis eu ius. Vim doming civibus indoctum ex, ne purto fabulas scribentur vis. Rebum luptatum ne est, solet ubique maiorum te his, cu graeci omnesque expetendis nec. Nec postulant facilisis at.

Cum veniam altera saperet ad, his ei commodo fuisset legendos. At audiam praesent vix, id quot bonorum per. Vim placerat signiferumque in, definiebas neglegentur mea eu, ne menandri pericula pertinacia eum. In graeco disputando vis, te has agam mucius definitiones. Ea ius omnis civibus, per cu tritani commune. Vis et scripserit comprehensam vituperatoribus. Eos rebum causae fabulas eu, dictas expetendis pro cu.

Nulla eligendi no sit, dico facilis an mea. Nec epicurei constituam ut. Vel ex reprimique contentiones, velit complectitur ad eos, usu alienum convenire persecuti an. Natum gubergren ut vis, usu ad nisl mandamus. Illud apeirian ea his, mea ut omnes referrentur, per no dolorum patrioque.

Eum altera gloriatur ei, ad quas ancillae reprimique has, per an audire tritani tincidunt. Vim ex alia euripidis, ea ipsum appareat est, in wisi ridens epicurei mei. Pro fabulas admodum atomorum et, vim mundi inimicus ei. Inermis alienum accusata vis no.

Id mei cibo regione legendos, idque nihil nec ut, in mutat dignissim mel. At dicunt prompta deserunt vim, per altera essent te. Pericula complectitur sea id, dicam similique intellegat ea vel. Eros menandri eleifend id per. Graecis civibus nam ut, sed id natum platonem.
          </P>
        </Div>
        <Div style={{'backgroundColor': 'orange'}}>
          <P>
            Lorem ipsum dolor sit amet, ei pri solet quodsi alterum, volumus molestie pro at, inimicus euripidis eu ius. Vim doming civibus indoctum ex, ne purto fabulas scribentur vis. Rebum luptatum ne est, solet ubique maiorum te his, cu graeci omnesque expetendis nec. Nec postulant facilisis at.

Cum veniam altera saperet ad, his ei commodo fuisset legendos. At audiam praesent vix, id quot bonorum per. Vim placerat signiferumque in, definiebas neglegentur mea eu, ne menandri pericula pertinacia eum. In graeco disputando vis, te has agam mucius definitiones. Ea ius omnis civibus, per cu tritani commune. Vis et scripserit comprehensam vituperatoribus. Eos rebum causae fabulas eu, dictas expetendis pro cu.

Nulla eligendi no sit, dico facilis an mea. Nec epicurei constituam ut. Vel ex reprimique contentiones, velit complectitur ad eos, usu alienum convenire persecuti an. Natum gubergren ut vis, usu ad nisl mandamus. Illud apeirian ea his, mea ut omnes referrentur, per no dolorum patrioque.

Eum altera gloriatur ei, ad quas ancillae reprimique has, per an audire tritani tincidunt. Vim ex alia euripidis, ea ipsum appareat est, in wisi ridens epicurei mei. Pro fabulas admodum atomorum et, vim mundi inimicus ei. Inermis alienum accusata vis no.

Id mei cibo regione legendos, idque nihil nec ut, in mutat dignissim mel. At dicunt prompta deserunt vim, per altera essent te. Pericula complectitur sea id, dicam similique intellegat ea vel. Eros menandri eleifend id per. Graecis civibus nam ut, sed id natum platonem.
          </P>
        </Div>
        <Div style={{'backgroundColor': 'limegreen'}}>
          <P>
            Lorem ipsum dolor sit amet, ei pri solet quodsi alterum, volumus molestie pro at, inimicus euripidis eu ius. Vim doming civibus indoctum ex, ne purto fabulas scribentur vis. Rebum luptatum ne est, solet ubique maiorum te his, cu graeci omnesque expetendis nec. Nec postulant facilisis at.

Cum veniam altera saperet ad, his ei commodo fuisset legendos. At audiam praesent vix, id quot bonorum per. Vim placerat signiferumque in, definiebas neglegentur mea eu, ne menandri pericula pertinacia eum. In graeco disputando vis, te has agam mucius definitiones. Ea ius omnis civibus, per cu tritani commune. Vis et scripserit comprehensam vituperatoribus. Eos rebum causae fabulas eu, dictas expetendis pro cu.

Nulla eligendi no sit, dico facilis an mea. Nec epicurei constituam ut. Vel ex reprimique contentiones, velit complectitur ad eos, usu alienum convenire persecuti an. Natum gubergren ut vis, usu ad nisl mandamus. Illud apeirian ea his, mea ut omnes referrentur, per no dolorum patrioque.

Eum altera gloriatur ei, ad quas ancillae reprimique has, per an audire tritani tincidunt. Vim ex alia euripidis, ea ipsum appareat est, in wisi ridens epicurei mei. Pro fabulas admodum atomorum et, vim mundi inimicus ei. Inermis alienum accusata vis no.

Id mei cibo regione legendos, idque nihil nec ut, in mutat dignissim mel. At dicunt prompta deserunt vim, per altera essent te. Pericula complectitur sea id, dicam similique intellegat ea vel. Eros menandri eleifend id per. Graecis civibus nam ut, sed id natum platonem.
          </P>
        </Div>
        <Div style={{'backgroundColor': 'red'}}>
          <P>
            Lorem ipsum dolor sit amet, ei pri solet quodsi alterum, volumus molestie pro at, inimicus euripidis eu ius. Vim doming civibus indoctum ex, ne purto fabulas scribentur vis. Rebum luptatum ne est, solet ubique maiorum te his, cu graeci omnesque expetendis nec. Nec postulant facilisis at.

Cum veniam altera saperet ad, his ei commodo fuisset legendos. At audiam praesent vix, id quot bonorum per. Vim placerat signiferumque in, definiebas neglegentur mea eu, ne menandri pericula pertinacia eum. In graeco disputando vis, te has agam mucius definitiones. Ea ius omnis civibus, per cu tritani commune. Vis et scripserit comprehensam vituperatoribus. Eos rebum causae fabulas eu, dictas expetendis pro cu.

Nulla eligendi no sit, dico facilis an mea. Nec epicurei constituam ut. Vel ex reprimique contentiones, velit complectitur ad eos, usu alienum convenire persecuti an. Natum gubergren ut vis, usu ad nisl mandamus. Illud apeirian ea his, mea ut omnes referrentur, per no dolorum patrioque.

Eum altera gloriatur ei, ad quas ancillae reprimique has, per an audire tritani tincidunt. Vim ex alia euripidis, ea ipsum appareat est, in wisi ridens epicurei mei. Pro fabulas admodum atomorum et, vim mundi inimicus ei. Inermis alienum accusata vis no.

Id mei cibo regione legendos, idque nihil nec ut, in mutat dignissim mel. At dicunt prompta deserunt vim, per altera essent te. Pericula complectitur sea id, dicam similique intellegat ea vel. Eros menandri eleifend id per. Graecis civibus nam ut, sed id natum platonem.
          </P>
        </Div>
        <Div style={{'backgroundColor': 'purple'}}>
          <P>
            Lorem ipsum dolor sit amet, ei pri solet quodsi alterum, volumus molestie pro at, inimicus euripidis eu ius. Vim doming civibus indoctum ex, ne purto fabulas scribentur vis. Rebum luptatum ne est, solet ubique maiorum te his, cu graeci omnesque expetendis nec. Nec postulant facilisis at.

Cum veniam altera saperet ad, his ei commodo fuisset legendos. At audiam praesent vix, id quot bonorum per. Vim placerat signiferumque in, definiebas neglegentur mea eu, ne menandri pericula pertinacia eum. In graeco disputando vis, te has agam mucius definitiones. Ea ius omnis civibus, per cu tritani commune. Vis et scripserit comprehensam vituperatoribus. Eos rebum causae fabulas eu, dictas expetendis pro cu.

Nulla eligendi no sit, dico facilis an mea. Nec epicurei constituam ut. Vel ex reprimique contentiones, velit complectitur ad eos, usu alienum convenire persecuti an. Natum gubergren ut vis, usu ad nisl mandamus. Illud apeirian ea his, mea ut omnes referrentur, per no dolorum patrioque.

Eum altera gloriatur ei, ad quas ancillae reprimique has, per an audire tritani tincidunt. Vim ex alia euripidis, ea ipsum appareat est, in wisi ridens epicurei mei. Pro fabulas admodum atomorum et, vim mundi inimicus ei. Inermis alienum accusata vis no.

Id mei cibo regione legendos, idque nihil nec ut, in mutat dignissim mel. At dicunt prompta deserunt vim, per altera essent te. Pericula complectitur sea id, dicam similique intellegat ea vel. Eros menandri eleifend id per. Graecis civibus nam ut, sed id natum platonem.
          </P>
        </Div>
        <Div style={{'backgroundColor': 'yellow'}}>
          <P>
            Lorem ipsum dolor sit amet, ei pri solet quodsi alterum, volumus molestie pro at, inimicus euripidis eu ius. Vim doming civibus indoctum ex, ne purto fabulas scribentur vis. Rebum luptatum ne est, solet ubique maiorum te his, cu graeci omnesque expetendis nec. Nec postulant facilisis at.

Cum veniam altera saperet ad, his ei commodo fuisset legendos. At audiam praesent vix, id quot bonorum per. Vim placerat signiferumque in, definiebas neglegentur mea eu, ne menandri pericula pertinacia eum. In graeco disputando vis, te has agam mucius definitiones. Ea ius omnis civibus, per cu tritani commune. Vis et scripserit comprehensam vituperatoribus. Eos rebum causae fabulas eu, dictas expetendis pro cu.

Nulla eligendi no sit, dico facilis an mea. Nec epicurei constituam ut. Vel ex reprimique contentiones, velit complectitur ad eos, usu alienum convenire persecuti an. Natum gubergren ut vis, usu ad nisl mandamus. Illud apeirian ea his, mea ut omnes referrentur, per no dolorum patrioque.

Eum altera gloriatur ei, ad quas ancillae reprimique has, per an audire tritani tincidunt. Vim ex alia euripidis, ea ipsum appareat est, in wisi ridens epicurei mei. Pro fabulas admodum atomorum et, vim mundi inimicus ei. Inermis alienum accusata vis no.

Id mei cibo regione legendos, idque nihil nec ut, in mutat dignissim mel. At dicunt prompta deserunt vim, per altera essent te. Pericula complectitur sea id, dicam similique intellegat ea vel. Eros menandri eleifend id per. Graecis civibus nam ut, sed id natum platonem.
          </P>
        </Div>
        </Section>
      </ContainerDiv>
    )
  }
}

export default TestScroll