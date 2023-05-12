import { Profile } from './components/Profile';

import { Input } from '../../components/Input';
import { Card } from '../../components/Card';

import { BlogContainer, HeaderPublications, CardList } from './styles';

export function Blog() {
  return (
    <BlogContainer>
      <Profile
        avatar="https://github.com/guiathayde.png"
        name="Guilherme Athayde"
        bio="It`s not a bug, it`s a feature!"
        username="guiathayde"
      />

      <HeaderPublications>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </HeaderPublications>
      <Input
        name="search"
        placeholder="Buscar conteúdo"
        containerStyle={{ marginBottom: 48 }}
      />

      <CardList>
        <Card
          title="JavaScript data types and data structures"
          date="Há 1 dia"
          content="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

let foo = 42; // foo is now a number
foo = 'bar'; // foo is now a string
foo = true; // foo is now a boolean"
        />
        <Card
          title="JavaScript data types and data structures"
          date="Há 1 dia"
          content="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

let foo = 42; // foo is now a number
foo = 'bar'; // foo is now a string
foo = true; // foo is now a boolean"
        />
        <Card
          title="JavaScript data types and data structures"
          date="Há 1 dia"
          content="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

let foo = 42; // foo is now a number
foo = 'bar'; // foo is now a string
foo = true; // foo is now a boolean"
        />
        <Card
          title="JavaScript data types and data structures"
          date="Há 1 dia"
          content="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

let foo = 42; // foo is now a number
foo = 'bar'; // foo is now a string
foo = true; // foo is now a boolean"
        />
      </CardList>
    </BlogContainer>
  );
}
