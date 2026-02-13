---
title: My Tutorial
---

# Goal

In this tutorial, you will learn how to create a simple 2d Jump and Run with Godot

# Previous Knowledge

For my tutorial you don't really need any prior knowledge. But if you can code in a language like JavaScript or C# it'll help you to understand the code easier

# What you'll learn

You will learn how to use the Game Engine Godot and how to create a Little 2D Jump and Run

# Tutorial

First you have to download Godot from the Internet. Afterwards you can open it and you will be in your first Menu. From there you press "New+" and Name your game however you'd like to Name it. Now we're in the Game engine. From the Folder you downloaded you're going to drag the two .png files into the bottom left of the engine and drop them. Now you can start with the game. First you select "2D Scene" and rename it something like "Game". This is where the game is going to be played, but to Play, we first Need a Player. So you press on the "+" next to game, followed by "Ctrl + A" In this menu you will search for CharacterBody2D, select it and press "Create". Now you open the "Create New Node" menu again with "Ctrl + A". This time you'll search for AnimatedSprite2D and Create it again. Now you can press on the Little arrow next to "Sprite Frames" on the right side of the screen and select "New SpriteFrames". After selecting it a small window on the Bottom will appeare. Now you have to press on the Little "Grid" Icon next to the Folder Icon and select the Knight.png. On the top right you will set the Horizontal/Vertical to 8x8. Now you select the top row of Pictures from left to right. Now you add the Frames. When you zoom in on your charakter you'll see that it's blurry. If you want to fix it, you can press on Project-->Projectsettings-->Textures and change the Filter from Linear to Nearest on the top left of the screen. After leaving the Menu, you now can set the Speed of the animation in the FPS tab. To see the animation in Game you only have to press on the Little arrow with the A in it. Now you can open the "Node Menu" again and and add a "CollisionShape2D". On the right you now again click on the Little arrow next to Shape and Choose the Circle Shape. Now you can drag it into the Player and It doesnt have to fill out the whole Player but rather be smaller. Now You can rename the Character body  and save with "Ctrl + S". In the "Game Scene" you now can drag the Player into. In the "Node Menu" you can now add "Camera 2D". On the right you set the zoom to 4x4. To get the Player to move you select the Player Scene again and press on the button with the Little green plus on it. You can just press create and set Speed to 130 and Jump_Velocity to -300. To make your Player able to move you have to select the Game Scene again and add a StaticBody2D Node. To make it work you have to select the StaticNode2D and add a CollisionShape2D Node. On the right of the screen, again press the litle arrow and select WorldBoundaryShape. Now select the StaticBody2D and pull the Border underneath the Player. Now Save everything and Press Play.

# Result

As the Tutorial isn't finished yet, you should now only be able to walk right/left and Jump on the invisible Border.
 
# What could go wrong?

If you miss one Little Detail in the Tutorial, it's possible that important things like the Border won't work, so be carefull.


The Tutorial is getting finish
