import React from 'react';
import styled from 'styled-components';
import EditorForm from '../widgets/forms/editor-form';

const Page = styled.section`
  width: 100%;
  margin: 40px 0 40px 0;
`;

const Editor = () => (
  <Page>
    <EditorForm />
  </Page>
);

export default Editor;
