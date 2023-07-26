'use client'

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from 'ai/react'

export function Chat(){
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return(
   <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {messages.map(message => {
          return(
          <div key={message.id} className="flex gap-3 text-slate-600 text-sm">
            {message.role == 'user' && (
              <Avatar>
                <AvatarFallback>HV</AvatarFallback>
                <AvatarImage src="https://github.com/hanniel09.png" />
              </Avatar>
          )}  
            {message.role == 'assistant' && (
              <Avatar>
              <AvatarFallback>RS</AvatarFallback>
              <AvatarImage src="https://github.com/rocketseat.png" />
            </Avatar>
          )}
          <p className="leading-relaxed">
            <span className="block font-bold text-slate-700">
              {message.role == 'user' ? 'Usuário': 'AI'}:
            </span>
            {message.content}
          </p>
        </div>
        )
      })}
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
        <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
        <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}