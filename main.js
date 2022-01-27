function wave(str) {
  return str.split('').map((char, i) => {
    if (char === ' ') return char = null;
    return str.slice(0, i) + char.toUpperCase() + str.slice(i + 1);
  }).filter((word) => word != null);
}

wave('The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the ar')