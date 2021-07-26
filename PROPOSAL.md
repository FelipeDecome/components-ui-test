## Proposta 'media prop'

```jsx
  <Typography variant="headline1" render="h2" media={{
    xl: {
      variant: '', // will inherit variant prop
      alignment: 'justify',
    },
    lg: {
      variant: '', // will inherit variant prop
      alignment: '', // will inherit xl alignment
    },
    md: {
      variant: 'headline3', // will overwrite variant prop
      alignment: '', // will inherit xl alignment
    },
    sm: {
      variant: 'headline4', // will overwrite 'md' and variant prop
      alignment: 'center', // will overwrite 'xl' alignment
    },
    xl: {
      variant: '', // will inherit 'sm' variant
      alignment: '', // will inherit 'sm' alignment
    }
  }}>
    Title
  </Typography>
```

### ⬆ *Deve ser 'up to down'?*
<br/>

-----------------------

## Criar um contexto (Text) para gerenciar as Typography's dentro dele
**Use case:**
  - Um artigo onde vários componentes de Typography seriam chamados.

### Proposta 1
```jsx
  <Text
    alignment="justify" // todas as Typography's que não possuem a prop alignmente iriam herdar o alignment do componente Text
    media={{
      md: {
        variant: 'body2',
      } // A partir desse breakpoint os componentes teriam essa variante
    }}>
    <Typography variant="body1">
      Lorem Ipsum
    </Typography>

    <Typography variant="body1">
      Lorem Ipsum
    </Typography>

    <Typography variant="body1">
      Lorem Ipsum
    </Typography>
  </Text>
```

### Proposta 2
```jsx
  <Text media={{
    target: 'body1', // aceitaria um array também ['body1', 'subtitle1']
    breakpoints: {
      md: {
        variant: 'body2',
      } // A partir desse breakpoint apenas os componentes com a variante 'body1' passariam a ter a nova variante}
    }
  }>
    <Typography variant="body1">
      Lorem Ipsum
    </Typography>

    <Typography variant="caption"> {/* Não teria sua variante alterada */}
      Lorem Ipsum
    </Typography>

    <Typography variant="body1">
      Lorem Ipsum
    </Typography>

    <Typography variant="body1">
      Lorem Ipsum
    </Typography>
  </Text>
```
