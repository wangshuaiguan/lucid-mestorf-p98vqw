import { useState } from "react";
import { Button } from "/components/ui/button";
import { Input } from "/components/ui/input";
import { Label } from "/components/ui/label";
import { Textarea } from "/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "/components/ui/card";

const XiaoHongShu = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handlePost = () => {
    setComments([...comments, { content: newComment, username: "匿名用户" }]);
    setNewComment("");
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <Avatar>
            <AvatarImage src="https://github.com/nutlope.png" />
            <AvatarFallback>匿名用户</AvatarFallback>
          </Avatar>
          <CardTitle>分享你的生活</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="标题"
          />
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="内��"
          />
        </CardContent>
        <CardFooter>
          <Button variant="primary">发布</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>评论</CardTitle>
        </CardHeader>
        <CardContent>
          {comments.map((comment, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="https://github.com/nutlope.png" />
                <AvatarFallback>匿名用户</AvatarFallback>
              </Avatar>
              <p>{comment.content}</p>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="评论"
          />
          <Button variant="primary" onClick={handlePost}>
            发布
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default XiaoHongShu;
