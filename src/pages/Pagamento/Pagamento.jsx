import React, { useState } from 'react';
import supabase from '../../supabaseclient';
import banner from './banner.jpeg';
import sucess from './sucess.png';
import './Pagamento.css';
import toast, { Toaster } from 'react-hot-toast';

function Pagamento() {
    // Definindo a chave PIX predefinida
    const [pix] = useState('488.431.768-89');
    //  Definindo o valor selecionado
    const [valor, setValor] = useState('35');
    // Estado para o telefone
    const [telefone, setTelefone] = useState('');
    // Estado para controlar o envio do formulário
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Função para copiar a chave PIX para a área de transferência
    const copiarPix = () => {
        navigator.clipboard.writeText(pix)
            .then(() => {
                toast.success('Chave PIX copiada para a área de transferência!');
            })
            .catch(err => {
                console.error('Erro ao copiar a chave PIX:', err);
            });
    };

    // Função para atualizar o valor selecionado
    const handleValorChange = (event) => {
        setValor(event.target.value);
    };

    // Função para atualizar o telefone com máscara
    const handleTelefoneChange = (event) => {
        const { value } = event.target;
        // Remove todos os caracteres não numéricos
        const onlyNumbers = value.replace(/\D/g, '');
        // Aplica a máscara
        const formatted = onlyNumbers
            .replace(/^(\d{2})(\d)/g, '($1) $2')
            .replace(/(\d{5})(\d)/g, '$1-$2')
            .replace(/(-\d{4})\d+?$/, '$1');
        setTelefone(formatted);
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Obter os dados do formulário
        const nome = event.target.nome.value;
        const sobrenome = event.target.sobrenome.value;
        const telefone = event.target.telefone.value;
        const valor = event.target.valor.value;

        // Inserir dados no banco de dados
        const { data, error } = await supabase
            .from('pagamentos')
            .insert([
                {
                    nome: nome,
                    sobrenome: sobrenome,
                    telefone: telefone,
                    valor: valor
                }
            ]);

        if (error) {
            console.error('Erro ao inserir dados:', error);
            toast.error('Erro ao enviar dados. Tente novamente.');
        } else {
            toast.success('Dados enviados com sucesso!');
            // Atualiza o estado para mostrar a mensagem de sucesso
            setFormSubmitted(true);
        }
    };

    // Função para reiniciar o formulário
    const handleReenviar = () => {
        setFormSubmitted(false);
        setTelefone('');
    };

    return (
        <div className='pai'>
            <br/>
            {formSubmitted ? (
                <div className="success-message">
                    <h1>Solicitação Enviada!</h1>
                    <p>Sua solicitação foi enviada com Sucesso! Em instantes entraremos em contato pelo Whatsapp!</p>
                    <br/>
                    <img src={sucess} alt="" srcset="" />
                    <br/>
                    <button onClick={handleReenviar}>Reenviar</button>
                </div>
            ) : (
                <div className="pagamento">
                    <br/>
                    <div className="infos">
                        <img src={banner} alt="" />
                        <p>Solicite sua <br/>Aprovação!</p>
                    </div>
                    <br/>
                    <form className="formulario" onSubmit={handleSubmit}>
                        <div className="campo">
                            <label htmlFor="nome">Nome (Sem Apelido)</label>
                            <input type="text" id="nome" name="nome" required />
                        </div>
                        <div className="campo">
                            <label htmlFor="sobrenome">Sobrenome</label>
                            <input type="text" id="sobrenome" name="sobrenome" required />
                        </div>
                        <div className="campo">
                            <label htmlFor="telefone">Telefone</label>
                            <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                value={telefone}
                                onChange={handleTelefoneChange}
                                maxLength="15" // Define o comprimento máximo do campo para evitar entradas inválidas
                                required
                            />
                        </div>
                        <div className="campo">
                            <label htmlFor="pix">PIX</label>
                            <div className="pix">
                                <input type="text" id="pix" name="pix" value={pix} readOnly />
                                <button id='pix-btn' type="button" onClick={copiarPix}>Copiar</button>
                            </div>
                        </div>
                        <div className="campo">
                            <label htmlFor="valor">Valor</label>
                            <select id="valor" name="valor" value={valor} onChange={handleValorChange}>
                                <option value="35">Valor da Casa (35)</option>
                                <option value="35">Valor de Fora (35)</option>
                            </select>
                        </div>
                        <br/>
                        <button id='enviar' type="submit">Enviar</button>
                        <br/>
                    </form>
                </div>
            )}
            <Toaster /> {/* Adiciona o Toaster aqui */}
            <br/>
        </div>
    );
}

export default Pagamento;
