# 🐾 BichoPrev

Simulador educacional de previsão de resultados do **Jogo do Bicho**, desenvolvido com **HTML, CSS e JavaScript**.
O sistema permite inserir os 3 últimos resultados e, utilizando uma lógica simples baseada na **soma das dezenas finais**, ele sugere:

* O próximo **bicho (grupo)**
* Uma **milhar possível** para o animal previsto
* Tudo com foco em prática e aprendizado de lógica e programação

> ⚠️ Este projeto é **exclusivamente para fins educativos**, demostrando como manipular lógica, dados e interface com JavaScript. O jogo do bicho é uma prática ilegal na maioria dos estados do Brasil e este projeto **não promove apostas reais**.

---

## 🚀 Como funciona

1. O usuário digita os **3 últimos resultados sorteados**.
2. O JavaScript extrai as **duas últimas casas de cada resultado**.
3. Somamos essas dezenas:

   ```
   soma = últimos dígitos de cada resultado
   ```
4. A soma é usada para calcular um número entre **1 e 25**, que representa um **bicho/grupo**.
5. O sistema também seleciona uma **dezena aleatória daquele grupo** e gera uma **milhar terminando nessa dezena**.

---

## 📂 Estrutura do Projeto

```
BichoPrev/
│
├─ index.html   → Interface do usuário
├─ style.css    → Estilos visuais
└─ script.js    → Lógica da previsão
```

---

## 🖥️ Tecnologias Utilizadas

* **HTML5**
* **CSS3**
* **JavaScript Puro (Vanilla JS)**

---

## 🔘 Funcionalidades

✔ Previsão baseada em lógica definida
✔ Sugestão de milhar aleatória
✔ Botão de limpar campos
✔ Interface simples e leve
✔ Não utiliza frameworks externos

---

## 📸 Demonstração

O usuário digita:

```
8732
1144
2355
```

O sistema pode retornar, por exemplo:

```
🔮 Previsão: Camelo (Grupo 8)
💯 Milhar sugerida: 2730
```

---

## 📎 Objetivo do Projeto

Este projeto foi criado para:

* Demonstrar lógica aplicada com JavaScript
* Manipulação de DOM
* Entrada e processamento de dados pelo navegador
* Prática para iniciantes em desenvolvimento web


---

## 📜 Licença

Uso livre apenas para fins **educacionais, estudo e experimentação**.
Não destinado para uso comercial ou promoção de jogos de azar.

---

## ✨ Autor

Projeto criado pelo usuário para estudo de programação front-end (Daniel Fealsi).
