#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from collections import Counter

test = '''If eternal return is the heaviest of burdens, then our lives can stand out against it in all their splendid lightness. But, is heaviness truly deplorable and lightness splendid? The heaviest of burdens crushes us. We sink beneath it. It pins us to the ground. The heaviest of burdens is, therefore, simultaneously an image of life's most intense fulfillment. The heavier the burden, the closer our lives come to the earth; the more real and truthful they become.
Conversely, the absolute absence of a burden causes man to be lighter than air, to soar into the heights. Take leave of the earth and his earthly being and become only half real. His movements as free as they are insignificant. What then shall we choose; weight or lightness?
I have been thinking about Tomas for many years. But only in the light of these reflections did I see him clearly. I saw him standing at the window of his flat and looking across the courtyard at the opposite walls not knowing what to do.
He had first met Tereza about three weeks earlier in a small Czech town. They had spent scarcely an hour together. She had accompanied him to the station and waited with him until he boarded the train. Ten days later she paid him a visit. They made love the day she arrived. That night she came down with a fever and stayed a whole week in his flat with the flu. He had come to feel an in-explicable love for this all but complete stranger. She seemed a child to him, a child someone had put in a bulrush basket docked with pitch and sent downstream for Tomas to fetch under the riverbank of his bed.
He knelt down next to her. Her feverous breath quickened and she gave out a weak moan. He pressed his face to hers and whispered calming words into her sleep. And all at once he fancied she had been with him for many years and was dying. He had a sudden clear feeling that he would not survive her death. He would lie down beside her and want to die with her. He pressed his face into the pillow beside her head and kept it there for a long time.
Now he was standing at the window trying to call that moment to account. What could it have been if not love declaring itself to him? But was it love? The feeling of wanting to die beside her was clearly exaggerated; he had seen her only once before in his life. Was it simply the hysteria of a man who aware deep down of his inaptitude for love, felt the self-deluding need to simulate it? His unconscious was so cowardly that the best partner he could choose for his life comedy was this miserable provincial waitress with practically no chance at all to enter his life.
He remained annoyed with himself until he realized that not knowing what he really wanted was actually quite natural. We can never know what to want because, living only one life, we can neither compare it with our previous lives nor perfect it in our lives to come.
There is no means of testing which decision is better because there is no basis for comparison. We live even-thing as it comes. Without warming, like an actor going on cold. And what can life be worth if the first rehearsal for life is life itself?
"Einmal ist keinmal", says Tomas to himself. What happens but once, says the German adage, might as well not have happened at all. If we have only one life to live, we might as well not have lived at all.'''
words = test.split()

print(words)

counter = Counter(words)

most_frequent = counter.most_common(5)

print(most_frequent)