import { Text,Button,Link} from '@nextui-org/react';

function HcatTitle() {
    
    const text = "致力于成为真正小而美的在线网页聊天程序";
    return (
        <div 
      style={{
          marginLeft: "5%",
          marginTop: "5%",
          width: "90%",
          height: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "Left",
          alignItems: "center",
        }
      }
      >
        <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, #3F51B5 30%, $blue800 100%",
        }}
        weight="bold"
      >
        HCAT
        </Text>
        <Text
          h1
          css={{
            textGradient: "45deg, #3F51B5 10%, #3f8cb5 70%",
            textAlign: "center",
          }}
          weight="bold"
        >
          {text}
        </Text>
        <div
        style={{
          marginTop: "2%",
        }}
        />
        <Button size="lg" as={Link} href="https://docs.hcat.online/docs/server/%E9%83%A8%E7%BD%B2">
        立即开始
      </Button>
      </div>
    );
}


export default HcatTitle;