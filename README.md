# Conway's Game of Life

**A simple set of rules. An astonishing world of patterns.**

This repository is an interactive implementation of **Conway's Game of Life**, a cellular automaton devised by mathematician **John Horton Conway** in 1970. It was originally part of the [GLife project](https://github.com/AyalewGM/GLife) and is now being developed as an independent React application.

## What is the Game of Life?

Despite its name, the Game of Life is not a conventional game. It has no players, scores, or winning condition. It is a **zero-player simulation**: after you choose an initial pattern, a set of mathematical rules determines everything that happens next.

Imagine an infinite two-dimensional grid made of square cells. Every cell is either **alive** or **dead**. Time advances in discrete steps called **generations**. At each generation, a cell's next state depends only on its current state and its eight neighboring cells (horizontal, vertical, and diagonal). All cells update **simultaneously**.

### Conway's four rules

1. **Underpopulation:** A living cell with fewer than two living neighbors dies.
2. **Survival:** A living cell with two or three living neighbors survives.
3. **Overpopulation:** A living cell with more than three living neighbors dies.
4. **Reproduction:** A dead cell with exactly three living neighbors becomes alive.

These are often abbreviated **B3/S23**: a dead cell is *born* with three neighbors, and a living cell *survives* with two or three.

Let $s_t(x,y) \in \{0,1\}$ denote a cell's state at generation $t$, and let $n_t(x,y)$ count its living neighbors. Then

$
s_{t+1}(x,y)=
\begin{cases}
1 & \text{if } n_t(x,y)=3,\\
1 & \text{if } s_t(x,y)=1 \text{ and } n_t(x,y)=2,\\
0 & \text{otherwise}.
\end{cases}
$

The rules are **deterministic**: the same starting arrangement always produces the same future, without randomness.

> **Implementation note:** The mathematical ideal uses an unbounded grid. This application uses a **finite grid** and treats cells beyond its edges as dead, so edge behavior differs from the infinite-grid model.

## Why do complex patterns appear?

A surprising result of the Game of Life is **emergence**: global complexity arises from local interactions, without a central controller. Some patterns stabilize, some repeat, some move, and others grow or collide.

Try these classic examples:

| Pattern | What happens | What it teaches |
| --- | --- | --- |
| **Block** (2 × 2) | Remains unchanged | Stable states, or *still lifes* |
| **Blinker** (three cells in a row) | Alternates between horizontal and vertical | Periodic behavior, or *oscillators* |
| **Glider** (five cells) | Moves diagonally, returning to its shape after four generations | Moving information and *spaceships* |
| **R-pentomino** (five cells) | Evolves chaotically for many generations before settling into recognizable structures | Unexpected long-term behavior |

Although its rules are elementary, the Game of Life can support constructions that perform **universal computation**. Given suitable arrangements and enough space, its evolving patterns can simulate the operations of a computer. This makes it much more than an attractive animation.

## Why is it still important?

**1. Emergence and complex systems.** The Game of Life offers a controlled environment for studying how local interactions generate large-scale organization. This idea is relevant to biology, ecology, social systems, and distributed computing—though the Game of Life is an illustrative model, not a faithful simulation of all these systems.

**2. Computer science and computation.** It demonstrates state machines, discrete algorithms, simulation, deterministic systems, and computational universality. It is a useful way to learn about how complicated computation can be built from simple components.

**3. Mathematical experimentation.** It encourages conjectures: Will this shape disappear? Will it repeat? How many generations until it stabilizes? Students can test predictions and distinguish empirical observations from proofs.

**4. Artificial life and pattern formation.** Researchers use cellular automata to explore general questions about self-organization, replication, and the minimum rules needed for interesting behavior.

**5. Creativity and digital art.** Evolving patterns form an accessible bridge between mathematical reasoning, visual design, and creative coding.

### Things to investigate

- Can you build a pattern that remains unchanged forever?
- Can you create an oscillator with a period greater than two?
- What happens when two gliders collide?
- How does a finite grid change a pattern's fate near the edge?
- Can you predict the next generation without running the simulation?

## Running the application

The standalone React/TypeScript migration is currently under review in [PR #1](https://github.com/AyalewGM/game-of-life/pull/1). On that branch:

```bash
npm install
npm run dev
npm test
npm run build
```

Use **Play/Pause**, **Step**, **Random**, and **Clear** to explore. You can draw living cells on the grid, adjust the speed, and load starting patterns.

## Further reading

- [Conway's Game of Life — Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) — history, patterns, rules, and mathematical developments.
- [LifeWiki](https://conwaylife.com/wiki/Main_Page) — a community-maintained encyclopedia of patterns and constructions.
- [Stanford Encyclopedia of Philosophy: Cellular Automata](https://plato.stanford.edu/entries/cellular-automata/) — broader theoretical context for cellular automata.

---

Originally developed as part of **GLife** by Ayalew Mersha. This project is an independent educational mathematics application.
