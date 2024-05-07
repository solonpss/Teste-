document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const foto1 = document.getElementById('foto1').files[0];
    const foto2 = document.getElementById('foto2').files[0];

    // Criar um FormData para enviar os dados do formulário e as fotos para o servidor
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('telefone', telefone);
    formData.append('foto1', foto1);
    formData.append('foto2', foto2);

    // Simulação de envio dos dados para o servidor e geração de PDF
    // Aqui você faria uma requisição AJAX para o servidor para gerar o PDF com os dados cadastrados e as fotos
    // e receberia o PDF de volta para download
    console.log('Dados enviados para o servidor:', {
        nome: nome,
        telefone: telefone,
        foto1: foto1,
        foto2: foto2
    });

    // Aqui você pode implementar o código para a geração do PDF e o download
    // Este exemplo é apenas uma simulação
    const pdfData = {
        nome: nome,
        telefone: telefone,
        foto1: foto1 ? foto1.name : 'Sem foto',
        foto2: foto2 ? foto2.name : 'Sem foto'
    };
    const pdfBlob = new Blob([JSON.stringify(pdfData)], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(pdfBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cadastro.pdf';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
});