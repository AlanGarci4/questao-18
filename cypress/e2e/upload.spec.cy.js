describe('Teste de Upload de Arquivo', () => {

  //Função para realizar o upload dos arquivos.

  const realizarUpload = (filePath) => {

    //Anexando o arquivo

    cy.get('input[type="file"]').attachFile(filePath); 
  };

  
  it('Deve fazer o upload de um arquivo JPG válido', () => {

    //Caminho para o arquivo JPG válido dentro de cypress/fixtures.

    const arquivoValido = 'JPG.jpg'; 

    //Realiza o upload e verifica o comportamento esperado

    realizarUpload(arquivoValido);

    //Verificações específicas, como se o arquivo foi carregado corretamente, e supondo que a classe 
    //.upload-sucesso seja exibida no sucesso do upload

    cy.get('.upload-sucesso') 
      .should('be.visible')
      .and('contain', 'Upload realizado com sucesso!');
  });

  it('Deve exibir erro quando o arquivo não existir', () => {

    //Arquivo não existe no diretório cypress/fixtures.

    const arquivoInexistente = 'inexistente.pdf'; 

    //Tentativa de realizar o upload de um arquivo inexistente.

    realizarUpload(arquivoInexistente);

    //Verifica se a mensagem de erro foi exibida, supondo que a classe .upload-erro seja exibida no erro do upload.

    cy.get('.upload-erro') 
      .should('be.visible')
      .and('contain', 'Arquivo não encontrado');
  });

 
  it('Deve exibir erro para tipos de arquivo EXE inválidos', () => {

    //Arquivo com tipo inválido, supondo que não deve aceitar arquivos *.exe.

    const arquivoInvalido = 'EXE.exe'; 

    //Tentiva de realizar o upload de um arquivo com tipo inválido.

    realizarUpload(arquivoInvalido);

    //Verifica se a mensagem de erro foi exibida, supondo que a classe .upload-erro seja exibida no erro do upload.

    cy.get('.upload-erro') 
      .should('be.visible')
      .and('contain', 'Tipo de arquivo inválido');
  });

  
  it('Deve exibir erro para tipo de arquivo PDF inválido', () => {

    //Arquivo PDF enviado, mas considerado também como tipo inválido para o cenário.

    const arquivoInvalido = 'PDF.pdf'; 

    //Tentativa de realizar o upload de um arquivo com tipo inválido.

    realizarUpload(arquivoInvalido);

    //Verifica se a mensagem de erro foi exibida, surpondo que a classe .upload-erro seja exibida no erro do upload.

    cy.get('.upload-erro')
      .should('be.visible')
      .and('contain', 'Tipo de arquivo inválido');
  });

});
