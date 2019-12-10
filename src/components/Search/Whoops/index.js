import React from 'react';

import Content from '~/components/Content';
import Emoji from '~/components/Emoji';

export default function Whoops() {
  return (
    <Content>
      <h2>Não encontrei nada... <Emoji heading label="Assustado">🧐</Emoji></h2>

      <p>Vamos procurar outra coisa?</p>
    </Content>
  );
}
