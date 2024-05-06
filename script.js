document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    // Simulação de envio de dados para o servidor e geração de PDF
    // Aqui você faria uma requisição AJAX para o servidor para gerar o PDF com os dados cadastrados
    // e receberia o PDF de volta para download
    const pdfData = {
        nome: nome,
        telefone: telefone
    };
    console.log('Dados enviados para o servidor:', pdfData);

    // Aqui você pode implementar o código para a geração do PDF e o download
    // Este exemplo é apenas uma simulação
    const pdfBlob = new Blob([JSON.stringify(pdfData)], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(pdfBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cadastro.pdf';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
});